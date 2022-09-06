module.exports = (sequelize, DataTypes) => {
	const tbl_fuelgas_press = sequelize.define(
		'tbl_fuelgas_press',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_hpgas_before: {
				type: DataTypes.FLOAT,
			},
			value_beforestop_value: {
				type: DataTypes.FLOAT,
			},
			value_aftergas_stopvalue: {
				type: DataTypes.FLOAT,
			},
			value_aftergas_controlvalue: {
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
			tableName: 'tbl_fuelgas_press',
		}
	);
	return tbl_fuelgas_press;
};
