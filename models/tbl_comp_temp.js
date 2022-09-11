module.exports = (sequelize, DataTypes) => {
	const tbl_comp_temp = sequelize.define(
		'tbl_comp_temp',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_discharge_anulr: {
				type: DataTypes.STRING,
			},
			value_inletair: {
				type: DataTypes.STRING,
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
			tableName: 'tbl_comp_temp',
		}
	);
	return tbl_comp_temp;
};
