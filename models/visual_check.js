module.exports = (sequelize, DataTypes) => {
	const visual_check = sequelize.define(
		"visual_check",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			l_o: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			temp: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			sound: {
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
			tableName: "visual_check",
		}
	)
	return visual_check
}
