module.exports = (sequelize, DataTypes) => {
	const tbl_bently_vibr_unfilter = sequelize.define(
		"tbl_bently_vibr_unfilter",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			thrustBrg_1_A: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			thrustBrg_1_B: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			No1Brg_rv101_V: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			No1Brg_rv101_H: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			No2Brg_rv102_V: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			No2Brg_rv102_H: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			GenBrg_rv103_V: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			GenBrg_rv103_H: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			GearturbineBrg_rv104_V: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			GearturbineBrg_rv104_H: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			GearpinionBrg_rv105_V: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			GearpinionBrg_rv105_H: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			GearwheelturbineBrg_rv106_V: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			GearwheelturbineBrg_rv106_H: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			GearwheelGen_Brg_rv107_V: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			GearwheelGen_Brg_rv107_H: {
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
			tableName: "tbl_bently_vibr_unfilter",
		}
	)
	return tbl_bently_vibr_unfilter
}
