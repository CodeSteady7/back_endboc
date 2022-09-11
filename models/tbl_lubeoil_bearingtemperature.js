module.exports = (sequelize, DataTypes) => {
	const tbl_lubeoil_bearingtemperature = sequelize.define(
		'tbl_lubeoil_bearingtemperature',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_lubeoil_bearingtemperature: {
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
			tableName: 'tbl_lubeoil_bearingtemperature',
		}
	);
	return tbl_lubeoil_bearingtemperature;
};
