module.exports = (sequelize, DataTypes) => {
	const tbl_fuel_temp = sequelize.define(
		"tbl_fuel_temp",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_fuel_temp: {
				type: DataTypes.FLOAT,
				allowNull: false,
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
			tableName: "tbl_fuel_temp",
		}
	)
	return tbl_fuel_temp
}
