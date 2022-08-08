module.exports = (sequelize, DataTypes) => {
	const tbl_lubeoil_tanktemp = sequelize.define(
		"tbl_lubeoil_tanktemp",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_lubeoil_tanktemp: {
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
			tableName: "tbl_lubeoil_tanktemp",
		}
	)
	return tbl_lubeoil_tanktemp
}
