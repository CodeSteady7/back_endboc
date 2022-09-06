module.exports = (sequelize, DataTypes) => {
	const tbl_exhaust_flue_gas_temperature = sequelize.define(
		'tbl_exhaust_flue_gas_temperature',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_5_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_6_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_7_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_8_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_9_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_10_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_11_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_12_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_AVETX_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_T1_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_T2_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_T3_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_T4_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_T5_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			value_T6_exhaustFluegas: {
				type: DataTypes.FLOAT,
			},
			kode_jam: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			name_table: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'tbl_exhaust_flue_gas_temperature',
		}
	);
	return tbl_exhaust_flue_gas_temperature;
};
