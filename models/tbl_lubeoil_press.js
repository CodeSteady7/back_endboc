module.exports = (sequelize, DataTypes) => {
	const tbl_lubeoil_press = sequelize.define(
		"tbl_lubeoil_press",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_main_oil_pump: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			value_fwdfilter: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			value_turbinebearing_header: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			value_gen_bearingheader: {
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
			tableName: "tbl_lubeoil_press",
		}
	)
	return tbl_lubeoil_press
}
