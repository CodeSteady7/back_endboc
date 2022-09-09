const Validator = require('fastest-validator');
const { QueryTypes } = require('sequelize');

let db = require('../models');
const { tbl_bently_vibr_unfilter, tbl_form08 } = require('../models');

const v = new Validator();
const form8Ctrl = {
	form8Add: async (req, res) => {
		try {
			const schema = {
				thrustBrg_1_A: 'string',
				thrustBrg_1_B: 'string',
				No1Brg_rv101_V: 'string',
				No1Brg_rv101_H: 'string',
				No2Brg_rv102_V: 'string',
				No2Brg_rv102_H: 'string',
				GenBrg_rv103_V: 'string',
				GenBrg_rv103_H: 'string',
				GearturbineBrg_rv104_V: 'string',
				GearturbineBrg_rv104_H: 'string',
				GearpinionBrg_rv105_V: 'string',
				GearpinionBrg_rv105_H: 'string',
				GearwheelturbineBrg_rv106_V: 'string',
				GearwheelturbineBrg_rv106_H: 'string',
				GearwheelGen_Brg_rv107_V: 'string',
				GearwheelGen_Brg_rv107_H: 'string',
				kode_jam: 'string',
			};
			const validate = v.validate(req.body, schema);

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
			} = req.body;

			let data = req.body;
			if (validate.length) return res.status(400).json(validate);

			const gettbl_bently_vibr_unfilter = await tbl_bently_vibr_unfilter.create({
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
				name_table: 'BENTLY VIBRATION UNFILTER',
			});

			const postFormID = await tbl_form08.create({
				nameForm: nameForm,
				kode_jam: kode_jam,
			});

			res.status(200).json({ gettbl_bently_vibr_unfilter, postFormID, msg: 'success' });
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
				msg: 'Success',
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getForm08: async (req, res) => {
		try {
			const tbl_bently_vibr_unfilter = await db.sequelize.query(
				'SELECT tbl_bently_vibr_unfilter.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_bently_vibr_unfilter LEFT JOIN tbl_jam ON tbl_bently_vibr_unfilter.kode_jam = tbl_jam.nilai_jam',
				{ type: QueryTypes.SELECT }
			);

			res.status(200).json({
				tbl_bently_vibr_unfilter,
				msg: 'success',
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getFormId08: async (req, res) => {
		try {
			const getID = await db.sequelize.query(
				'SELECT tbl_form08.* FROM tbl_form08 INNER JOIN tbl_bently_vibr_unfilter ON tbl_form08.id_form = tbl_bently_vibr_unfilter.id',
				{ type: QueryTypes.SELECT }
			);

			res.status(200).json({ getID, msg: 'success' });
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
					name_table: 'BENTLY VIBRATION UNFILTER',
				},
				selector
			);

			res.status(200).json({ gettbl_bently_vibr_unfilter, msg: 'success' });
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
