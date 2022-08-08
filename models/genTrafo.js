module.exports = (sequelize, DataTypes) => {
	const genTrafo = sequelize.define(
		"genTrafo",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			liquid_level: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			liquid_temp: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			wind_temp: {
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
			tableName: "genTrafo",
		}
	)
	return genTrafo
}
