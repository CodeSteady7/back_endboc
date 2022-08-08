module.exports = (sequelize, DataTypes) => {
	const rect_trafo_liquid_temp = sequelize.define(
		"rect_trafo_liquid_temp",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_tblRect_trafo_liquid_temp: {
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
			tableName: "rect_trafo_liquid_temp",
		}
	)
	return rect_trafo_liquid_temp
}
