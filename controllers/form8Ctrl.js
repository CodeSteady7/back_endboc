const Validator = require("fastest-validator");
const { QueryTypes } = require("sequelize");

let db = require("../models");
const {
  tbl_bently_vibr_unfilter,
  tbl_form08,
  tbl_historyDate,
} = require("../models");

const v = new Validator();
const form8Ctrl = {
  form8Add: async (req, res) => {
    try {
      const {
        thrustBrg_1_A,
        thrustBrg_1_B,
        No1Brg_rv101_V,
        No1Brg_rv101_H,
        No2Brg_rv102_V,
        No2Brg_rv102_H,
        GenBrg_rv103_V,
        GenBrg_rv103_H,
        GearturbineBrg_rv104_V,
        GearturbineBrg_rv104_H,
        GearpinionBrg_rv105_V,
        GearpinionBrg_rv105_H,
        GearwheelturbineBrg_rv106_V,
        GearwheelturbineBrg_rv106_H,
        GearwheelGen_Brg_rv107_V,
        GearwheelGen_Brg_rv107_H,
        nameForm,
        kode_jam,
        user_id,
      } = req.body;

      const date = new Date();
      let vDate = date.toLocaleString("en-GB");
      let createdAt = vDate.split(",");
      let setcreatedAt = createdAt[0];
      let checkDate = await tbl_historyDate.findOne({
        where: { createdAt: setcreatedAt },
      });

      let checkLastRow = [
        await tbl_bently_vibr_unfilter.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
      ];

      let lastRowtbl_form = await tbl_form08.findOne({
        attributes: ["id_form"],
        order: [["id_form", "DESC"]],
      });

      let data = checkLastRow.map((item) => {
        console.log("item", item.id, lastRowtbl_form.id_form);
        return item.id == lastRowtbl_form.id_form;
      });

      let checkInclude = data.includes(false);

      const t = await db.sequelize.transaction();

      if (checkInclude == false) {
        try {
          let check =
            checkDate == null || ""
              ? ""
              : await tbl_historyDate.create(
                  {
                    setcreatedAt,
                    setcreatedAt,
                    user_id: user_id,
                  },
                  { transaction: t }
                );

          const gettbl_bently_vibr_unfilter =
            await tbl_bently_vibr_unfilter.create(
              {
                thrustBrg_1_A: thrustBrg_1_A,
                thrustBrg_1_B: thrustBrg_1_B,
                No1Brg_rv101_V: No1Brg_rv101_V,
                No1Brg_rv101_H: No1Brg_rv101_H,
                No2Brg_rv102_V: No2Brg_rv102_V,
                No2Brg_rv102_H: No2Brg_rv102_H,
                GenBrg_rv103_V: GenBrg_rv103_V,
                GenBrg_rv103_H: GenBrg_rv103_H,
                GearturbineBrg_rv104_V: GearturbineBrg_rv104_V,
                GearturbineBrg_rv104_H: GearturbineBrg_rv104_H,
                GearpinionBrg_rv105_V: GearpinionBrg_rv105_V,
                GearpinionBrg_rv105_H: GearpinionBrg_rv105_H,
                GearwheelturbineBrg_rv106_V: GearwheelturbineBrg_rv106_V,
                GearwheelturbineBrg_rv106_H: GearwheelturbineBrg_rv106_H,
                GearwheelGen_Brg_rv107_V: GearwheelGen_Brg_rv107_V,
                GearwheelGen_Brg_rv107_H: GearwheelGen_Brg_rv107_H,
                kode_jam: kode_jam,
                name_table: "BENTLY VIBRATION UNFILTER",
              },
              { transaction: t }
            );

          const postFormID = await tbl_form08.create(
            {
              nameForm: nameForm,
              kode_jam: kode_jam,
            },
            { transaction: t }
          );

          await t.commit();

          res.status(200).json({
            check,
            gettbl_bently_vibr_unfilter,
            postFormID,
            msg: "success",
          });
        } catch (err) {
          console.log(err);
          await t.rollback();
        }
      } else {
        return res.status(500).json({ msg: "contact an IT engineer" });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  // postFormId08: async (req, res) => {
  // 	try {
  // 		const { nameForm, kode_jam } = req.body
  // 		let body = req.body
  // 		const postFormID = await tbl_form08.create({
  // 			nameForm: nameForm,
  // 			kode_jam: kode_jam,
  // 		})

  // 		res.status(200).json({ postFormID, msg: "success" })
  // 	} catch (error) {
  // 		return res.status(500).json({ msg: error.message })
  // 	}
  // },

  getForm08params: async (req, res) => {
    try {
      const tbl_bently_vibr_unfilters = await tbl_bently_vibr_unfilter.findAll({
        where: { id: req.params.id },
      });

      res.status(200).json({
        tbl_bently_vibr_unfilters,
        msg: "Success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getForm08: async (req, res) => {
    try {
      const tbl_bently_vibr_unfilter = await db.sequelize.query(
        "SELECT tbl_bently_vibr_unfilter.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_bently_vibr_unfilter LEFT JOIN tbl_jam ON tbl_bently_vibr_unfilter.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );

      res.status(200).json({
        tbl_bently_vibr_unfilter,
        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getFormId08: async (req, res) => {
    try {
      const getID = await db.sequelize.query(
        "SELECT tbl_form08.* FROM tbl_form08 INNER JOIN tbl_bently_vibr_unfilter ON tbl_form08.id_form = tbl_bently_vibr_unfilter.id",
        { type: QueryTypes.SELECT }
      );

      res.status(200).json({ getID, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  updateForm08: async (req, res) => {
    try {
      let selector = {
        where: { id: req.params.id },
      };

      const {
        thrustBrg_1_A,
        thrustBrg_1_B,
        No1Brg_rv101_V,
        No1Brg_rv101_H,
        No2Brg_rv102_V,
        No2Brg_rv102_H,
        GenBrg_rv103_V,
        GenBrg_rv103_H,
        GearturbineBrg_rv104_V,
        GearturbineBrg_rv104_H,
        GearpinionBrg_rv105_V,
        GearpinionBrg_rv105_H,
        GearwheelturbineBrg_rv106_V,
        GearwheelturbineBrg_rv106_H,
        GearwheelGen_Brg_rv107_V,
        GearwheelGen_Brg_rv107_H,
        kode_jam,
      } = req.body;

      const gettbl_bently_vibr_unfilter = await tbl_bently_vibr_unfilter.update(
        {
          thrustBrg_1_A: thrustBrg_1_A,
          thrustBrg_1_B: thrustBrg_1_B,
          No1Brg_rv101_V: No1Brg_rv101_V,
          No1Brg_rv101_H: No1Brg_rv101_H,
          No2Brg_rv102_V: No2Brg_rv102_V,
          No2Brg_rv102_H: No2Brg_rv102_H,
          GenBrg_rv103_V: GenBrg_rv103_V,
          GenBrg_rv103_H: GenBrg_rv103_H,
          GearturbineBrg_rv104_V: GearturbineBrg_rv104_V,
          GearturbineBrg_rv104_H: GearturbineBrg_rv104_H,
          GearpinionBrg_rv105_V: GearpinionBrg_rv105_V,
          GearpinionBrg_rv105_H: GearpinionBrg_rv105_H,
          GearwheelturbineBrg_rv106_V: GearwheelturbineBrg_rv106_V,
          GearwheelturbineBrg_rv106_H: GearwheelturbineBrg_rv106_H,
          GearwheelGen_Brg_rv107_V: GearwheelGen_Brg_rv107_V,
          GearwheelGen_Brg_rv107_H: GearwheelGen_Brg_rv107_H,
          kode_jam: kode_jam,
          name_table: "BENTLY VIBRATION UNFILTER",
        },
        selector
      );

      res.status(200).json({ gettbl_bently_vibr_unfilter, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = form8Ctrl;

// gettbl_bently_vibr_unfilter: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_bently_vibr_unfilter.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_bently_vibr_unfilter LEFT JOIN tbl_jam ON tbl_bently_vibr_unfilter.kode_jam = tbl_jam.nilai_jam"
// 		)

// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },
