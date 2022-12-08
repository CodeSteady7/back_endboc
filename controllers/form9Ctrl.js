const Validator = require("fastest-validator");
const { QueryTypes } = require("sequelize");
let db = require("../models");
const { tbl_seismic_vibration, tbl_form09 } = require("../models");

const v = new Validator();

const form9Ctrl = {
  form9Add: async (req, res) => {
    try {
      // const schema = {
      // 	IBRG_casing: 'string',
      // 	comp_Casing: 'string',
      // 	gen_BrgCasing: 'string',
      // 	kode_jam: 'string',
      // };
      // const validate = v.validate(req.body, schema);

      const { IBRG_casing, comp_Casing, gen_BrgCasing, kode_jam, nameForm } =
        req.body;

      // let data = req.body;
      // if (validate.length) return res.status(400).json(validate);

      const gettbl_seismic_vibration = await tbl_seismic_vibration.create({
        IBRG_casing: IBRG_casing,
        comp_Casing: comp_Casing,
        gen_BrgCasing: gen_BrgCasing,
        kode_jam: kode_jam,
        name_table: "SEISMIC VIBRATION",
      });

      const postFormID = await tbl_form09.create({
        nameForm: nameForm,
        kode_jam: kode_jam,
      });

      res
        .status(200)
        .json({ gettbl_seismic_vibration, postFormID, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  // postFormId09: async (req, res) => {
  // 	try {
  // 		const { nameForm, kode_jam } = req.body;
  // 		let body = req.body;
  // 		const postFormID = await tbl_form09.create({
  // 			nameForm: nameForm,
  // 			kode_jam: kode_jam,
  // 		});

  // 		res.status(200).json({ postFormID, msg: 'success' });
  // 	} catch (error) {
  // 		return res.status(500).json({ msg: error.message });
  // 	}
  // },

  getForm09params: async (req, res) => {
    try {
      const tbl_seismic_vibrations = await tbl_seismic_vibration.findAll({
        where: { id: req.params.id },
      });

      res.status(200).json({
        tbl_seismic_vibrations,
        msg: "Success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getForm09: async (req, res) => {
    try {
      const tbl_seismic_vibration = await db.sequelize.query(
        "SELECT tbl_seismic_vibration.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_seismic_vibration LEFT JOIN tbl_jam ON tbl_seismic_vibration.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );

      res.status(200).json({
        tbl_seismic_vibration,
        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getFormId09: async (req, res) => {
    try {
      const getID = await db.sequelize.query(
        "SELECT tbl_form09.* FROM tbl_form09 INNER JOIN tbl_seismic_vibration ON tbl_form09.id_form = tbl_seismic_vibration.id",
        { type: QueryTypes.SELECT }
      );

      res.status(200).json({ getID, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  updateForm09: async (req, res) => {
    try {
      let selector = {
        where: { id: req.params.id },
      };

      const { IBRG_casing, comp_Casing, gen_BrgCasing, kode_jam } = req.body;

      const gettbl_seismic_vibration = await tbl_seismic_vibration.update(
        {
          IBRG_casing: IBRG_casing,
          comp_Casing: comp_Casing,
          gen_BrgCasing: gen_BrgCasing,
          kode_jam: kode_jam,
          name_table: "SEISMIC VIBRATION",
        },
        selector
      );

      res.status(200).json({ gettbl_seismic_vibration, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = form9Ctrl;
