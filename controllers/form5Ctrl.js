const Validator = require('fastest-validator');
let db = require('../models');
const { QueryTypes } = require('sequelize');

const {
	tbl_firststage_wheelspace,
	tbl_second_wheelspace,
	tbl_comp_temp,
	tbl_fuel_temp,
	tbl_form05,
} = require('../models');

const v = new Validator();
const form5Ctrl = {
	form5add: async (req, res) => {
		try {
			// const schema = {
			// 	value_first_fwd2: 'string',
			// 	value_first_fwd3: 'string',
			// 	value_first_afd2: 'string',
			// 	value_first_afd3: 'string',
			// 	value_second_fwd2: 'string',
			// 	value_second_fwd3: 'string',
			// 	value_second_aft1: 'string',
			// 	value_second_aft2: 'string',
			// 	value_discharge_anulr: 'string',
			// 	// value_inletair: 'string',
			// 	value_fuel_temp: 'string',
			// 	kode_jam: 'string',
			// };
			// const validate = v.validate(req.body, schema);
			const {
				value_first_fwd2,
				value_first_fwd3,
				value_first_afd2,
				value_first_afd3,
				value_second_fwd2,
				value_second_fwd3,
				value_second_aft1,
				value_second_aft2,
				value_discharge_anulr,
				value_fuel_temp,
				nameForm,
				kode_jam,
			} = req.body;

			// if (validate.length) return res.status(400).json(validate);
			// let data = req.body;

			const gettbl_firststage_wheelspace = await tbl_firststage_wheelspace.create({
				value_first_fwd2: value_first_fwd2,
				value_first_fwd3: value_first_fwd3,
				value_first_afd2: value_first_afd2,
				value_first_afd3: value_first_afd3,
				kode_jam: kode_jam,
				name_table: 'FIRST STAGE WHEEL SPACE',
			});

			const gettbl_second_wheelspace = await tbl_second_wheelspace.create({
				value_second_fwd2: value_second_fwd2,
				value_second_fwd3: value_second_fwd3,
				value_second_aft1: value_second_aft1,
				value_second_aft2: value_second_aft2,
				kode_jam: kode_jam,
				name_table: 'SECOND WHEELSPACE',
			});

			const gettbl_comp_temp = await tbl_comp_temp.create({
				value_discharge_anulr: value_discharge_anulr,
				// value_inletair: value_inletair,
				kode_jam: kode_jam,
				name_table: 'COMP TEMP',
			});

			const gettbl_fuel_temp = await tbl_fuel_temp.create({
				value_fuel_temp: value_fuel_temp,
				kode_jam: kode_jam,
				name_table: 'FUEL TEMPERATURE',
			});

			const postFormID = await tbl_form05.create({
				nameForm: nameForm,
				kode_jam: kode_jam,
			});

			res.status(200).json({
				gettbl_firststage_wheelspace,
				gettbl_second_wheelspace,
				gettbl_comp_temp,
				gettbl_fuel_temp,
				postFormID,
				msg: 'success',
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	// postFormId05: async (req, res) => {
	// 	try {
	// 		const { nameForm, kode_jam } = req.body;
	// 		let a = req.body;
	// 		const postFormID = await tbl_form05.create({
	// 			nameForm: nameForm,
	// 			kode_jam: kode_jam,
	// 		});

	// 		res.status(200).json({ postFormID, msg: 'success' });
	// 	} catch (error) {
	// 		return res.status(500).json({ msg: error.message });
	// 	}
	// },

	getForm05params: async (req, res) => {
		try {
			const tbl_firststage_wheelspaces = await tbl_firststage_wheelspace.findAll({
				where: { id: req.params.id },
			});
			const tbl_second_wheelspaces = await tbl_second_wheelspace.findAll({
				where: { id: req.params.id },
			});
			const tbl_comp_temps = await tbl_comp_temp.findAll({
				where: { id: req.params.id },
			});
			const tbl_fuel_temps = await tbl_fuel_temp.findAll({
				where: { id: req.params.id },
			});

			res.status(200).json({
				tbl_firststage_wheelspaces,
				tbl_second_wheelspaces,
				tbl_comp_temps,
				tbl_fuel_temps,
				tbl_form05,
				msg: 'success',
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getform05: async (req, res) => {
		try {
			const gettbl_firststage_wheelspace = await db.sequelize.query(
				'SELECT tbl_firststage_wheelspace.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_firststage_wheelspace LEFT JOIN tbl_jam ON tbl_firststage_wheelspace.kode_jam = tbl_jam.nilai_jam',
				{ type: QueryTypes.SELECT }
			);
			const gettbl_second_wheelspace = await db.sequelize.query(
				'SELECT tbl_second_wheelspace.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_second_wheelspace LEFT JOIN tbl_jam ON tbl_second_wheelspace.kode_jam = tbl_jam.nilai_jam',
				{ type: QueryTypes.SELECT }
			);
			const gettbl_comp_temp = await db.sequelize.query(
				'SELECT tbl_comp_temp.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_comp_temp LEFT JOIN tbl_jam ON tbl_comp_temp.kode_jam = tbl_jam.nilai_jam',
				{ type: QueryTypes.SELECT }
			);

			const gettbl_fuel_temp = await db.sequelize.query(
				'SELECT tbl_fuel_temp.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_fuel_temp LEFT JOIN tbl_jam ON tbl_fuel_temp.kode_jam = tbl_jam.nilai_jam',
				{ type: QueryTypes.SELECT }
			);
			res.status(200).json({
				gettbl_firststage_wheelspace,
				gettbl_second_wheelspace,
				gettbl_comp_temp,
				gettbl_fuel_temp,
				msg: 'success',
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getFormId05: async (req, res) => {
		try {
			const getID = await db.sequelize.query(
				'SELECT tbl_form05.id_form, tbl_form05.nameForm, tbl_form05.kode_jam, tbl_form05.createdAt, tbl_form05.updatedAt FROM tbl_form05 INNER JOIN tbl_comp_temp ON tbl_form05.id_form = tbl_comp_temp.id INNER JOIN tbl_second_wheelspace ON tbl_form05.id_form = tbl_second_wheelspace.id INNER JOIN tbl_fuel_temp ON tbl_form05.id_form = tbl_fuel_temp.id INNER JOIN tbl_firststage_wheelspace ON tbl_form05.id_form = tbl_firststage_wheelspace.id',
				{ type: QueryTypes.SELECT }
			);
			res.status(200).json({ getID, msg: 'success' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	updateForm05: async (req, res) => {
		try {
			let selector = {
				where: { id: req.params.id },
			};

			const {
				value_first_fwd2,
				value_first_fwd3,
				value_first_afd2,
				value_first_afd3,
				value_second_fwd2,
				value_second_fwd3,
				value_second_aft1,
				value_second_aft2,
				value_discharge_anulr,
				value_fuel_temp,
				kode_jam,
			} = req.body;

			const gettbl_firststage_wheelspace = await tbl_firststage_wheelspace.update(
				{
					value_first_fwd2: value_first_fwd2,
					value_first_fwd3: value_first_fwd3,
					value_first_afd2: value_first_afd2,
					value_first_afd3: value_first_afd3,
					kode_jam: kode_jam,
					name_table: 'FIRST STAGE WHEEL SPACE',
				},
				selector
			);

			const gettbl_second_wheelspace = await tbl_second_wheelspace.update(
				{
					value_second_fwd2: value_second_fwd2,
					value_second_fwd3: value_second_fwd3,
					value_second_aft1: value_second_aft1,
					value_second_aft2: value_second_aft2,
					kode_jam: kode_jam,
					name_table: 'SECOND WHEELSPACE',
				},
				selector
			);

			const gettbl_comp_temp = await tbl_comp_temp.update(
				{
					value_discharge_anulr: value_discharge_anulr,
					// value_inletair: value_inletair,
					kode_jam: kode_jam,
					name_table: 'COMP TEMP',
				},
				selector
			);

			const gettbl_fuel_temp = await tbl_fuel_temp.update(
				{
					value_fuel_temp: value_fuel_temp,
					kode_jam: kode_jam,
					name_table: 'FUEL TEMPERATURE',
				},
				selector
			);

			res.status(200).json({
				gettbl_firststage_wheelspace,
				gettbl_second_wheelspace,
				gettbl_comp_temp,
				gettbl_fuel_temp,
				msg: 'success',
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
};

module.exports = form5Ctrl;

// gettbl_firststage_wheelspace: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_firststage_wheelspace.id, tbl_firststage_wheelspace.value_first_fwd2, tbl_firststage_wheelspace.value_first_fwd3, tbl_firststage_wheelspace.value_first_afd2, tbl_firststage_wheelspace.value_first_afd3, tbl_firststage_wheelspace.kode_jam, tbl_firststage_wheelspace.createdAt, tbl_firststage_wheelspace.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_firststage_wheelspace LEFT JOIN tbl_jam ON tbl_firststage_wheelspace.kode_jam = tbl_jam.nilai_jam"
// 		)
// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },

// gettbl_second_wheelspace: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_second_wheelspace.id, tbl_second_wheelspace.value_second_fwd2, tbl_second_wheelspace.value_second_fwd3, tbl_second_wheelspace.value_second_aft1, tbl_second_wheelspace.value_second_aft2, tbl_second_wheelspace.kode_jam, tbl_second_wheelspace.createdAt, tbl_second_wheelspace.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_second_wheelspace LEFT JOIN tbl_jam ON tbl_second_wheelspace.kode_jam = tbl_jam.nilai_jam"
// 		)
// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },

// gettbl_comp_temp: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_comp_temp.id, tbl_comp_temp.value_discharge_anulr, tbl_comp_temp.value_inletair, tbl_comp_temp.kode_jam, tbl_comp_temp.createdAt, tbl_comp_temp.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_comp_temp LEFT JOIN tbl_jam ON tbl_comp_temp.kode_jam = tbl_jam.nilai_jam"
// 		)
// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },

// gettbl_fuel_temp: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_fuel_temp.id, tbl_fuel_temp.value_fuel_temp, tbl_fuel_temp.kode_jam, tbl_fuel_temp.createdAt, tbl_fuel_temp.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_fuel_temp LEFT JOIN tbl_jam ON tbl_fuel_temp.kode_jam = tbl_jam.nilai_jam"
// 		)
// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },
