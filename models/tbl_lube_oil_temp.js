module.exports = (sequelize, DataTypes) => {
	const tbl_lube_oil_temp = sequelize.define(
		'tbl_lube_oil_temp',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_oilcooler_inlet: {
				type: DataTypes.FLOAT,
			},
			value_oilcooler_outlet: {
				type: DataTypes.FLOAT,
			},
			value_journaland_thrustdrain: {
				type: DataTypes.FLOAT,
			},
			value_no2_bearingdrain: {
				type: DataTypes.FLOAT,
			},
			value_gearpinion_no1: {
				type: DataTypes.FLOAT,
			},
			value_gearwheel_no2: {
				type: DataTypes.FLOAT,
			},
			value_gearwheel_no3: {
				type: DataTypes.FLOAT,
			},
			value_gearwheel_no4: {
				type: DataTypes.FLOAT,
			},
			value_gearwheel_no5: {
				type: DataTypes.FLOAT,
			},
			value_generator_drain: {
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
			tableName: 'tbl_lube_oil_temp',
		}
	);
	return tbl_lube_oil_temp;
};
