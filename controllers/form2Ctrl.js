const Validator = require('fastest-validator');
let db = require('../models');
const { QueryTypes } = require('sequelize');

const {
	kw_hours,
	genTrafo,
	rect_trafo_liquid_temp,
	view_gentrafo,
	view_kw_hours,
	view_rect_trafo_liquid_temp,
	view_visual_check,
	visual_check,
	tbl_form02,
	tbl_jam,
} = require('../models');

const v = new Validator();
const form2Ctrl = {
	form2Add: async (req, res) => {
		try {
			// const schema = {
			// 	liquid_level: 'string',
			// 	liquid_temp: 'string',
			// 	wind_temp: 'string',
			// 	kode_jam: 'string',
			// 	value_tblkw_hours: 'string',
			// 	value_tblRect_trafo_liquid_temp: 'string',
			// 	l_o: 'string',
			// 	temp: 'string',
			// 	sound: 'string',
			// 	// createdAt: "string",
			// };

			// if (validate.length) return res.status(400).json(validate);
			// const validate = v.validate(req.body, schema);

			const {
				liquid_level,
				liquid_temp,
				wind_temp,
				value_tblkw_hours,
				value_tblRect_trafo_liquid_temp,
				l_o,
				temp,
				sound,
				nameForm,
				kode_jam,
			} = req.body;

			const getgenTrafo = await genTrafo.create({
				liquid_level: liquid_level,
				liquid_temp: liquid_temp,
				wind_temp: wind_temp,
				kode_jam: kode_jam,
				name_table: 'Gen Trafo',
			});

			const getvisual_check = await visual_check.create({
				l_o: l_o,
				temp: temp,
				sound: sound,
				kode_jam: kode_jam,
				// // createdAt: createdAt,
				name_table: 'Visual Check',
			});

			const getkw_hours = await kw_hours.create({
				value_tblkw_hours: value_tblkw_hours,
				kode_jam: kode_jam,
				name_table: 'KW Hours',
			});

			const getTblReact_trafoliquid = await rect_trafo_liquid_temp.create({
				value_tblRect_trafo_liquid_temp: value_tblRect_trafo_liquid_temp,
				kode_jam: kode_jam,
				name_table: 'React Trafo Liquid Temperature',
			});

			const postFormID = await tbl_form02.create({
				nameForm: nameForm,
				kode_jam: kode_jam,
			});

			console.log(req.body);
			let data = req.body;

			res.status(200).json({
				getTblReact_trafoliquid,
				getkw_hours,
				getgenTrafo,
				getvisual_check,
				postFormID,
				msg: 'success',
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	// postFormId02: async (req, res) => {
	// 	try {
	// 		const { nameForm, kode_jam } = req.body;
	// 		let body = req.body;
	// 		const postFormID = await tbl_form02.create({
	// 			nameForm: nameForm,
	// 			kode_jam: kode_jam,
	// 		});

	// 		res.status(200).json({ postFormID, msg: 'success' });
	// 	} catch (error) {
	// 		return res.status(500).json({ msg: error.message });
	// 	}
	// },

	getForm02params: async (req, res) => {
		try {
			const genTrafos = await genTrafo.findAll({ where: { id: req.params.id } });
			const visual_checks = await visual_check.findAll({
				where: { id: req.params.id },
			});
			const kw_hourss = await kw_hours.findAll({
				where: { id: req.params.id },
			});
			const rect_trafo_liquid_temps = await rect_trafo_liquid_temp.findAll({
				where: { id: req.params.id },
			});

			res.status(200).json({
				genTrafos,
				visual_checks,
				kw_hourss,
				rect_trafo_liquid_temps,
				msg: 'Success',
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getFormId2: async (req, res) => {
		try {
			const getID = await db.sequelize.query(
				'SELECT tbl_form02.id_form, tbl_form02.nameForm, tbl_form02.kode_jam, tbl_form02.createdAt, tbl_form02.updatedAt FROM tbl_form02 INNER JOIN gentrafo ON tbl_form02.id_form = gentrafo.id INNER JOIN visual_check ON tbl_form02.id_form = visual_check.id INNER JOIN kw_hours ON tbl_form02.id_form = kw_hours.id INNER JOIN rect_trafo_liquid_temp ON tbl_form02.id_form = rect_trafo_liquid_temp.id',
				{ type: QueryTypes.SELECT }
			);

			res.status(200).json({ getID, msg: 'success' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getForm02: async (req, res) => {
		try {
			const gentrafo = await db.sequelize.query(
				'SELECT gentrafo.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM gentrafo LEFT JOIN tbl_jam ON gentrafo.kode_jam = tbl_jam.nilai_jam',
				{ type: QueryTypes.SELECT }
			);
			const kw_hours = await db.sequelize.query(
				'SELECT kw_hours.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM kw_hours LEFT JOIN tbl_jam ON kw_hours.kode_jam = tbl_jam.nilai_jam',
				{ type: QueryTypes.SELECT }
			);
			const rect_trafo_liquid_temp = await db.sequelize.query(
				'SELECT rect_trafo_liquid_temp.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM rect_trafo_liquid_temp LEFT JOIN tbl_jam ON rect_trafo_liquid_temp.kode_jam = tbl_jam.nilai_jam',
				{ type: QueryTypes.SELECT }
			);
			const visual_check = await db.sequelize.query(
				'SELECT visual_check.*, tbl_jam.nilai_jam, tbl_jam.urutan_jam FROM visual_check LEFT JOIN tbl_jam ON visual_check.kode_jam = tbl_jam.nilai_jam',
				{ type: QueryTypes.SELECT }
			);

			res.status(200).json({
				gentrafo,
				kw_hours,
				rect_trafo_liquid_temp,
				visual_check,
				msg: 'success',
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	updateForm02: async (req, res) => {
		try {
			const {
				liquid_level,
				liquid_temp,
				wind_temp,
				value_tblkw_hours,
				value_tblRect_trafo_liquid_temp,
				l_o,
				temp,
				sound,
				kode_jam,
			} = req.body;

			let selector = {
				where: { id: req.params.id },
			};

			const getgenTrafo = await genTrafo.update(
				{
					liquid_level: liquid_level,
					liquid_temp: liquid_temp,
					wind_temp: wind_temp,
					kode_jam: kode_jam,
					name_table: 'Gen Trafo',
				},
				selector
			);

			const getvisual_check = await visual_check.update(
				{
					l_o: l_o,
					temp: temp,
					sound: sound,
					kode_jam: kode_jam,
					name_table: 'Visual Check',
				},
				selector
			);

			const getkw_hours = await kw_hours.update(
				{
					value_tblkw_hours: value_tblkw_hours,
					kode_jam: kode_jam,
					name_table: 'KW Hours',
				},
				selector
			);

			const getTblReact_trafoliquid = await rect_trafo_liquid_temp.update(
				{
					value_tblRect_trafo_liquid_temp: value_tblRect_trafo_liquid_temp,
					kode_jam: kode_jam,
					name_table: 'React Trafo Liquid Temperature',
				},
				selector
			);

			res.status(200).json({
				getTblReact_trafoliquid,
				getkw_hours,
				getgenTrafo,
				getvisual_check,
				msg: 'success',
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	// =======================================================================
};

module.exports = form2Ctrl;

// getgenTrafo: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT gentrafo.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM gentrafo LEFT JOIN tbl_jam ON gentrafo.kode_jam = tbl_jam.nilai_jam"
// 		)
// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },

// getkw_hours: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT kw_hours.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM kw_hours LEFT JOIN tbl_jam ON kw_hours.kode_jam = tbl_jam.nilai_jam"
// 		)
// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },

// getTblReact_trafoliquid: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT rect_trafo_liquid_temp.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM rect_trafo_liquid_temp LEFT JOIN tbl_jam ON rect_trafo_liquid_temp.kode_jam = tbl_jam.nilai_jam"
// 		)
// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },

// getvisual_check: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT visual_check.*, tbl_jam.nilai_jam, tbl_jam.urutan_jam FROM visual_check LEFT JOIN tbl_jam ON visual_check.kode_jam = tbl_jam.nilai_jam"
// 		)
// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },
