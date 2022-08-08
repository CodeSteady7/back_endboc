module.exports = (sequelize, DataTypes) => {
	const tbl_seismic_vibration = sequelize.define(
		"tbl_seismic_vibration",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			IBRG_casing: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			comp_Casing: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			gen_BrgCasing: {
				type: DataTypes.FLOAT,
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
			kode_jam: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			name_table: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: "tbl_seismic_vibration",
		}
	)
	return tbl_seismic_vibration
}