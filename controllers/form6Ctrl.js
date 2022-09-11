const Validator = require('fastest-validator');
const { QueryTypes } = require('sequelize');
let db = require('../models');

const {
	tbl_exhaust_flue_gas_temperature,
	tbl_exhaust_temp,
	tbl_comp_temp,
	tbl_form06,
} = require('../models');

const v = new Validator();
const form6Ctrl = {
	form6add: async (req, res) => {
		try {
			// const schema = {
			// 	value_1_exhaustTemp: 'string',
			// 	value_2_exhaustTemp: 'string',
			// 	value_3_exhaustTemp: 'string',
			// 	value_4_exhaustTemp: 'string',
			// 	value_5_exhaustFluegas: 'string',
			// 	value_6_exhaustFluegas: 'string',
			// 	value_7_exhaustFluegas: 'string',
			// 	value_8_exhaustFluegas: 'string',
			// 	value_9_exhaustFluegas: 'string',
			// 	value_10_exhaustFluegas: 'string',
			// 	value_11_exhaustFluegas: 'string',
			// 	value_12_exhaustFluegas: 'string',
			// 	value_AVETX_exhaustFluegas: 'string',
			// 	value_T1_exhaustFluegas: 'string',
			// 	value_T2_exhaustFluegas: 'string',
			// 	value_T3_exhaustFluegas: 'string',
			// 	value_T4_exhaustFluegas: 'string',
			// 	value_T5_exhaustFluegas: 'string',
			// 	value_T6_exhaustFluegas: 'string',
			// 	value_inletair: 'string',
			// 	kode_jam: 'string',
			// };
			// const validate = v.validate(req.body, schema);
			// if (validate.length) return res.status(400).json(validate);

			const {
				value_1_exhaustTemp,
				value_2_exhaustTemp,
				value_3_exhaustTemp,
				value_4_exhaustTemp,
				value_5_exhaustFluegas,
				value_6_exhaustFluegas,
				value_7_exhaustFluegas,
				value_8_exhaustFluegas,
				value_9_exhaustFluegas,
				value_10_exhaustFluegas,
				value_11_exhaustFluegas,
				value_12_exhaustFluegas,
				value_AVETX_exhaustFluegas,
				value_T1_exhaustFluegas,
				value_T2_exhaustFluegas,
				value_T3_exhaustFluegas,
				value_T4_exhaustFluegas,
				value_T5_exhaustFluegas,
				value_T6_exhaustFluegas,
				value_inletair,
				nameForm,
				kode_jam,
			} = req.body;
			// let data = req.body;

			const gettbl_exhaust_flue_gas_temperature = await tbl_exhaust_flue_gas_temperature.create({
				value_5_exhaustFluegas: value_5_exhaustFluegas,
				value_6_exhaustFluegas: value_6_exhaustFluegas,
				value_7_exhaustFluegas: value_7_exhaustFluegas,
				value_8_exhaustFluegas: value_8_exhaustFluegas,
				value_9_exhaustFluegas: value_9_exhaustFluegas,
				value_10_exhaustFluegas: value_10_exhaustFluegas,
				value_11_exhaustFluegas: value_11_exhaustFluegas,
				value_12_exhaustFluegas: value_12_exhaustFluegas,
				value_AVETX_exhaustFluegas: value_AVETX_exhaustFluegas,
				value_T1_exhaustFluegas: value_T1_exhaustFluegas,
				value_T2_exhaustFluegas: value_T2_exhaustFluegas,
				value_T3_exhaustFluegas: value_T3_exhaustFluegas,
				value_T4_exhaustFluegas: value_T4_exhaustFluegas,
				value_T5_exhaustFluegas: value_T5_exhaustFluegas,
				value_T6_exhaustFluegas: value_T6_exhaustFluegas,
				kode_jam: kode_jam,
				name_table: 'EXHAUST FLUE GAS',
			});

			const gettbl_exhaust_temp = await tbl_exhaust_temp.create({
				value_1_exhaustTemp: value_1_exhaustTemp,
				value_2_exhaustTemp: value_2_exhaustTemp,
				value_3_exhaustTemp: value_3_exhaustTemp,
				value_4_exhaustTemp: value_4_exhaustTemp,
				kode_jam: kode_jam,
				name_table: 'EXHAUST TEMP',
			});

			const gettbl_comp_temp = await tbl_comp_temp.create({
				// value_discharge_anulr: value_discharge_anulr,
				value_inletair: value_inletair,
				kode_jam: kode_jam,
				name_table: 'COMP TEMPERATURE',
			});

			const postFormID = await tbl_form06.create({
				nameForm: nameForm,
				kode_jam: kode_jam,
			});

			res.status(200).json({
				gettbl_exhaust_flue_gas_temperature,
				gettbl_exhaust_temp,
				gettbl_comp_temp,
				postFormID,
				msg: 'success',
			});
		} catch (error) {
			return res.status(500).json({
				msg: error.message,
			});
		}
	},

	// postFormId06: async (req, res) => {
	// 	try {
	// 		const { nameForm, kode_jam } = req.body
	// 		let body = req.body
	// 		const postFormID = await tbl_form06.create({
	// 			nameForm: nameForm,
	// 			kode_jam: kode_jam,
	// 		})

	// 		res.status(200).json({ postFormID, msg: "success" })
	// 	} catch (error) {
	// 		return res.status(500).json({ msg: error.message })
	// 	}
	// },

	getForm06params: async (req, res) => {
		try {
			const tbl_exhaust_flue_gas_temperatures = await tbl_exhaust_flue_gas_temperature.findAll({
				where: { id: req.params.id },
			});
			const tbl_exhaust_temps = await tbl_exhaust_temp.findAll({ where: { id: req.params.id } });
			const tbl_comp_temps = await tbl_comp_temp.findAll({ where: { id: req.params.id } });

			res.status(200).json({
				tbl_exhaust_flue_gas_temperatures,
				tbl_exhaust_temps,
				tbl_comp_temps,
				msg: 'Success',
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getForm06: async (req, res) => {
		try {
			const tbl_exhaust_flue_gas_temperature = await db.sequelize.query(
				'SELECT tbl_exhaust_flue_gas_temperature.*, tbl_jam.nilai_jam, tbl_jam.urutan_jam FROM tbl_exhaust_flue_gas_temperature LEFT JOIN tbl_jam ON tbl_exhaust_flue_gas_temperature.kode_jam = tbl_jam.nilai_jam',
				{ type: QueryTypes.SELECT }
			);
			const tbl_exhaust_temp = await db.sequelize.query(
				'SELECT tbl_exhaust_temp.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_exhaust_temp LEFT JOIN tbl_jam ON tbl_exhaust_temp.kode_jam = tbl_jam.nilai_jam',
				{ type: QueryTypes.SELECT }
			);
			const tbl_comp_temp = await db.sequelize.query(
				'SELECT tbl_comp_temp.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_comp_temp LEFT JOIN tbl_jam ON tbl_comp_temp.kode_jam = tbl_jam.nilai_jam',
				{ type: QueryTypes.SELECT }
			);

			res.status(200).json({
				tbl_exhaust_flue_gas_temperature,
				tbl_exhaust_temp,
				tbl_comp_temp,
				msg: 'success',
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getFormId06: async (req, res) => {
		try {
			const getID = await db.sequelize.query(
				'SELECT tbl_form06.id_form, tbl_form06.nameForm, tbl_form06.kode_jam, tbl_form06.createdAt, tbl_form06.updatedAt FROM tbl_form06 INNER JOIN tbl_exhaust_flue_gas_temperature ON tbl_form06.id_form = tbl_exhaust_flue_gas_temperature.id INNER JOIN tbl_exhaust_temp ON tbl_form06.id_form = tbl_exhaust_temp.id INNER JOIN tbl_comp_temp ON tbl_form06.id_form = tbl_comp_temp.id',
				{ type: QueryTypes.SELECT }
			);

			res.status(200).json({ getID, msg: 'success' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	updateForm06: async (req, res) => {
		try {
			let selector = {
				where: { id: req.params.id },
			};

			const {
				value_1_exhaustTemp,
				value_2_exhaustTemp,
				value_3_exhaustTemp,
				value_4_exhaustTemp,
				value_5_exhaustFluegas,
				value_6_exhaustFluegas,
				value_7_exhaustFluegas,
				value_8_exhaustFluegas,
				value_9_exhaustFluegas,
				value_10_exhaustFluegas,
				value_11_exhaustFluegas,
				value_12_exhaustFluegas,
				value_AVETX_exhaustFluegas,
				value_T1_exhaustFluegas,
				value_T2_exhaustFluegas,
				value_T3_exhaustFluegas,
				value_T4_exhaustFluegas,
				value_T5_exhaustFluegas,
				value_T6_exhaustFluegas,
				value_inletair,
				kode_jam,
			} = req.body;

			const gettbl_exhaust_flue_gas_temperature = await tbl_exhaust_flue_gas_temperature.update(
				{
					value_5_exhaustFluegas: value_5_exhaustFluegas,
					value_6_exhaustFluegas: value_6_exhaustFluegas,
					value_7_exhaustFluegas: value_7_exhaustFluegas,
					value_8_exhaustFluegas: value_8_exhaustFluegas,
					value_9_exhaustFluegas: value_9_exhaustFluegas,
					value_10_exhaustFluegas: value_10_exhaustFluegas,
					value_11_exhaustFluegas: value_11_exhaustFluegas,
					value_12_exhaustFluegas: value_12_exhaustFluegas,
					value_AVETX_exhaustFluegas: value_AVETX_exhaustFluegas,
					value_T1_exhaustFluegas: value_T1_exhaustFluegas,
					value_T2_exhaustFluegas: value_T2_exhaustFluegas,
					value_T3_exhaustFluegas: value_T3_exhaustFluegas,
					value_T4_exhaustFluegas: value_T4_exhaustFluegas,
					value_T5_exhaustFluegas: value_T5_exhaustFluegas,
					value_T6_exhaustFluegas: value_T6_exhaustFluegas,
					kode_jam: kode_jam,
					name_table: 'EXHAUST FLUE GAS',
				},
				selector
			);

			const gettbl_exhaust_temp = await tbl_exhaust_temp.update(
				{
					value_1_exhaustTemp: value_1_exhaustTemp,
					value_2_exhaustTemp: value_2_exhaustTemp,
					value_3_exhaustTemp: value_3_exhaustTemp,
					value_4_exhaustTemp: value_4_exhaustTemp,
					kode_jam: kode_jam,
					name_table: 'EXHAUST TEMP',
				},
				selector
			);

			const gettbl_comp_temp = await tbl_comp_temp.update(
				{
					// value_discharge_anulr: value_discharge_anulr,
					value_inletair: value_inletair,
					kode_jam: kode_jam,
					name_table: 'COMP TEMPERATURE',
				},
				selector
			);

			res.status(200).json({
				gettbl_exhaust_flue_gas_temperature,
				gettbl_exhaust_temp,
				gettbl_comp_temp,
				msg: 'success',
			});
		} catch (error) {
			return res.status(500).json({
				msg: error.message,
			});
		}
	},
};

module.exports = form6Ctrl;

// gettbl_exhaust_flue_gas_temperature: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_exhaust_flue_gas_temperature.id, tbl_exhaust_flue_gas_temperature.value_5_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_6_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_7_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_8_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_9_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_10_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_11_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_12_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_AVETX_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_T1_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_T2_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_T3_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_T4_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_T5_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_T6_exhaustFluegas, tbl_exhaust_flue_gas_temperature.kode_jam, tbl_exhaust_flue_gas_temperature.createdAt, tbl_exhaust_flue_gas_temperature.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_exhaust_flue_gas_temperature LEFT JOIN tbl_jam ON tbl_exhaust_flue_gas_temperature.kode_jam = tbl_jam.nilai_jam"
// 		)
// 		res.status(200).json({
// 			data,
// 			msg: "success",
// 		})
// 	} catch (error) {
// 		return res.status(500).json({
// 			msg: error.message,
// 		})
// 	}
// },

// gettbl_exhaust_temp: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_exhaust_temp.id, tbl_exhaust_temp.value_1_exhaustTemp, tbl_exhaust_temp.value_2_exhaustTemp, tbl_exhaust_temp.value_3_exhaustTemp, tbl_exhaust_temp.value_4_exhaustTemp, tbl_exhaust_temp.kode_jam, tbl_exhaust_temp.createdAt, tbl_exhaust_temp.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_exhaust_temp LEFT JOIN tbl_jam ON tbl_exhaust_temp.kode_jam = tbl_jam.nilai_jam"
// 		)

// 		res.status(200).json({
// 			data,
// 			msg: "success",
// 		})
// 	} catch (error) {
// 		return res.status(500).json({
// 			msg: error.message,
// 		})
// 	}
// },
