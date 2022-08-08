module.exports = (sequelize, DataTypes) => {
	const tbl_dsp = sequelize.define(
		"tbl_dsp",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_dsp: {
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
			tableName: "tbl_dsp",
		}
	)
	return tbl_dsp
}
