module.exports = (sequelize, DataTypes) => {
	const tbl_exhaust_temp = sequelize.define(
		'tbl_exhaust_temp',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_1_exhaustTemp: {
				type: DataTypes.STRING,
			},
			value_2_exhaustTemp: {
				type: DataTypes.STRING,
			},
			value_3_exhaustTemp: {
				type: DataTypes.STRING,
			},
			value_4_exhaustTemp: {
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
			tableName: 'tbl_exhaust_temp',
		}
	);
	return tbl_exhaust_temp;
};
