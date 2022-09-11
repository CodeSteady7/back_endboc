module.exports = (sequelize, DataTypes) => {
	const tbl_turbinspeed = sequelize.define(
		'tbl_turbinspeed',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_rpm: {
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
			tableName: 'tbl_turbinspeed',
		}
	);
	return tbl_turbinspeed;
};
