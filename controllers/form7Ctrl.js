const Validator = require("fastest-validator");
const db = require("../models");
const { QueryTypes } = require("sequelize");
const {
  tbl_fuelgas_press,
  tbl_compdisch_airpress,
  tbl_diffpress,
  tbl_cooling_water,
  tbl_form07,
} = require("../models");

const v = new Validator();
const form7Ctrl = {
  form7Add: async (req, res) => {
    try {
      // const schema = {
      // 	value_hpgas_before: 'string',
      // 	value_beforestop_value: 'string',
      // 	value_aftergas_stopvalue: 'string',
      // 	value_aftergas_controlvalue: 'string',
      // 	value_afterporous_filter: 'string',
      // 	value_for96cd: 'string',
      // 	value_inlethouse_filter: 'string',
      // 	value_lubeoil_filter: 'string',
      // 	value_controloil_filter: 'string',
      // 	value_hydoil_filter: 'string',
      // 	value_temperature: 'string',
      // 	kode_jam: 'string',
      // };
      // const validate = v.validate(req.body, schema);

      const {
        value_hpgas_before,
        value_beforestop_value,
        value_aftergas_stopvalue,
        value_aftergas_controlvalue,
        value_inlethouse_filter,
        value_lubeoil_filter,
        value_controloil_filter,
        value_hydoil_filter,
        value_afterporous_filter,
        value_for96cd,
        value_temperature,
        nameForm,
        kode_jam,
        createdAt,
      } = req.body;

      let checkDate = await tbl_historyDate.findOne({
        where: { createdAt: createdAt },
      });

      let check = checkDate
        ? ""
        : await tbl_historyDate.create({
            createdAt,
            updatedAt,
            user_id: 1,
          });

      const gettbl_fuelgas_press = await tbl_fuelgas_press.create({
        value_hpgas_before: value_hpgas_before,
        value_beforestop_value: value_beforestop_value,
        value_aftergas_stopvalue: value_aftergas_stopvalue,
        value_aftergas_controlvalue: value_aftergas_controlvalue,
        kode_jam: kode_jam,
        name_table: "FUEL GAS TEMPERATURE",
      });

      const gettbl_compdisch_airpress = await tbl_compdisch_airpress.create({
        value_afterporous_filter: value_afterporous_filter,
        value_for96cd: value_for96cd,
        kode_jam: kode_jam,
        name_table: "COMPDISCH AIR PRESS",
      });

      const gettbl_diff_press = await tbl_diffpress.create({
        value_inlethouse_filter: value_inlethouse_filter,
        value_lubeoil_filter: value_lubeoil_filter,
        value_controloil_filter: value_controloil_filter,
        value_hydoil_filter: value_hydoil_filter,
        kode_jam: kode_jam,
        name_table: "DIFF PRESS",
      });

      const gettbl_cooling_water = await tbl_cooling_water.create({
        value_temperature: value_temperature,
        kode_jam: kode_jam,
        name_table: "COOLING WATER",
      });

      const postFormID = await tbl_form07.create({
        nameForm: nameForm,
        kode_jam: kode_jam,
      });

      res.status(200).json({
        check,
        gettbl_fuelgas_press,
        gettbl_compdisch_airpress,
        gettbl_diff_press,
        gettbl_cooling_water,
        postFormID,
        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  // postFormId07: async (req, res) => {
  // 	try {
  // 		const { nameForm, kode_jam } = req.body
  // 		let body = req.body
  // 		const postFormID = await tbl_form07.create({
  // 			nameForm: nameForm,
  // 			kode_jam: kode_jam,
  // 		})

  // 		res.status(200).json({ postFormID, msg: "success" })
  // 	} catch (error) {
  // 		return res.status(500).json({ msg: error.message })
  // 	}
  // },

  getForm07params: async (req, res) => {
    try {
      const tbl_fuelgas_presss = await tbl_fuelgas_press.findAll({
        where: { id: req.params.id },
      });
      const tbl_compdisch_airpresss = await tbl_compdisch_airpress.findAll({
        where: { id: req.params.id },
      });
      const tbl_diffpresss = await tbl_diffpress.findAll({
        where: { id: req.params.id },
      });
      const tbl_cooling_waters = await tbl_cooling_water.findAll({
        where: { id: req.params.id },
      });

      res.status(200).json({
        tbl_fuelgas_presss,
        tbl_compdisch_airpresss,
        tbl_diffpresss,
        tbl_cooling_waters,

        msg: "Success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getForm07: async (req, res) => {
    try {
      const tbl_fuelgas_press = await db.sequelize.query(
        "SELECT tbl_fuelgas_press.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_fuelgas_press LEFT JOIN tbl_jam ON tbl_fuelgas_press.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );
      const tbl_compdisch_airpress = await db.sequelize.query(
        "SELECT tbl_compdisch_airpress.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_compdisch_airpress LEFT JOIN tbl_jam ON tbl_compdisch_airpress.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );
      const tbl_diffpress = await db.sequelize.query(
        "SELECT tbl_diffpress.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_diffpress LEFT JOIN tbl_jam ON tbl_diffpress.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );
      const tbl_cooling_water = await db.sequelize.query(
        "SELECT tbl_cooling_water.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_cooling_water LEFT JOIN tbl_jam ON tbl_cooling_water.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );

      res.status(200).json({
        tbl_fuelgas_press,
        tbl_compdisch_airpress,
        tbl_diffpress,
        tbl_cooling_water,

        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getFormId07: async (req, res) => {
    try {
      const getID = await db.sequelize.query(
        "SELECT tbl_form07.id_form, tbl_form07.nameForm, tbl_form07.kode_jam, tbl_form07.createdAt, tbl_form07.updatedAt FROM tbl_form07 INNER JOIN tbl_fuelgas_press ON tbl_form07.id_form = tbl_fuelgas_press.id INNER JOIN tbl_compdisch_airpress ON tbl_form07.id_form = tbl_compdisch_airpress.id INNER JOIN tbl_diffpress ON tbl_form07.id_form = tbl_diffpress.id INNER JOIN tbl_cooling_water ON tbl_form07.id_form = tbl_cooling_water.id",
        { type: QueryTypes.SELECT }
      );

      res.status(200).json({ getID, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  updateForm07: async (req, res) => {
    try {
      let selector = {
        where: { id: req.params.id },
      };

      const {
        value_hpgas_before,
        value_beforestop_value,
        value_aftergas_stopvalue,
        value_aftergas_controlvalue,
        value_inlethouse_filter,
        value_lubeoil_filter,
        value_controloil_filter,
        value_hydoil_filter,
        value_afterporous_filter,
        value_for96cd,
        value_temperature,
        kode_jam,
      } = req.body;

      const gettbl_fuelgas_press = await tbl_fuelgas_press.update(
        {
          value_hpgas_before: value_hpgas_before,
          value_beforestop_value: value_beforestop_value,
          value_aftergas_stopvalue: value_aftergas_stopvalue,
          value_aftergas_controlvalue: value_aftergas_controlvalue,
          kode_jam: kode_jam,
          name_table: "FUEL GAS TEMPERATURE",
        },
        selector
      );

      const gettbl_compdisch_airpress = await tbl_compdisch_airpress.update(
        {
          value_afterporous_filter: value_afterporous_filter,
          value_for96cd: value_for96cd,
          kode_jam: kode_jam,
          name_table: "COMPDISCH AIR PRESS",
        },
        selector
      );

      const gettbl_diff_press = await tbl_diffpress.update(
        {
          value_inlethouse_filter: value_inlethouse_filter,
          value_lubeoil_filter: value_lubeoil_filter,
          value_controloil_filter: value_controloil_filter,
          value_hydoil_filter: value_hydoil_filter,
          kode_jam: kode_jam,
          name_table: "DIFF PRESS",
        },
        selector
      );

      const gettbl_cooling_water = await tbl_cooling_water.update(
        {
          value_temperature: value_temperature,
          kode_jam: kode_jam,
          name_table: "COOLING WATER",
        },
        selector
      );

      res.status(200).json({
        gettbl_fuelgas_press,
        gettbl_compdisch_airpress,
        gettbl_diff_press,
        gettbl_cooling_water,
        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = form7Ctrl;

// gettbl_fuelgas_press: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_fuelgas_press.value_hpgas_before, tbl_fuelgas_press.value_beforestop_value, tbl_fuelgas_press.value_aftergas_stopvalue, tbl_fuelgas_press.value_aftergas_controlvalue, tbl_fuelgas_press.kode_jam, tbl_fuelgas_press.createdAt, tbl_fuelgas_press.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam, tbl_fuelgas_press.id FROM tbl_fuelgas_press LEFT JOIN tbl_jam ON tbl_fuelgas_press.kode_jam = tbl_jam.nilai_jam",
// 			{ type: QueryTypes.SELECT }
// 		)

// 		res.status(200).json({
// 			data,
// 			msg: "success",
// 		})
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },

// gettbl_compdisch_airpress: async (req, res) => {
// 	try {
// 		// let query = ('SELECT tbl_compdisch_airpress.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_compdisch_airpress LEFT JOIN tbl_jam ON tbl_compdisch_airpress.kode_jam = tbl_jam.nilai_jam', { type: QueryTypes.SELECT })
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_compdisch_airpress.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_compdisch_airpress LEFT JOIN tbl_jam ON tbl_compdisch_airpress.kode_jam = tbl_jam.nilai_jam",
// 			{ type: QueryTypes.SELECT }
// 		)

// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },

// gettbl_diff_press: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_diffpress.id, tbl_diffpress.value_inlethouse_filter, tbl_diffpress.value_lubeoil_filter, tbl_diffpress.value_controloil_filter, tbl_diffpress.value_hydoil_filter, tbl_diffpress.kode_jam, tbl_diffpress.createdAt, tbl_diffpress.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_diffpress LEFT JOIN tbl_jam ON tbl_diffpress.kode_jam = tbl_jam.nilai_jam",
// 			{ type: QueryTypes.SELECT }
// 		)
// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },

// gettbl_cooling_water: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_cooling_water.id, tbl_cooling_water.value_temperature, tbl_cooling_water.kode_jam, tbl_cooling_water.createdAt, tbl_cooling_water.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_cooling_water LEFT JOIN tbl_jam ON tbl_cooling_water.kode_jam = tbl_jam.nilai_jam",
// 			{ type: QueryTypes.SELECT }
// 		)
// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },
