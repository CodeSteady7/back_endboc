module.exports = (sequelize, DataTypes) => {
	const tbl_report = sequelize.define(
		"tbl_report",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			imageBase64: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			judul: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lokasi: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			deskripsi: {
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
		},
		{
			tableName: "tbl_report",
		}
	)
	return tbl_report
}
