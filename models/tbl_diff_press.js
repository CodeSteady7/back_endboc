module.exports = (sequelize, DataTypes) => {
	const tbl_diffpress = sequelize.define(
		'tbl_diffpress',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_inlethouse_filter: {
				type: DataTypes.FLOAT,
			},
			value_lubeoil_filter: {
				type: DataTypes.FLOAT,
			},
			value_controloil_filter: {
				type: DataTypes.FLOAT,
			},
			value_hydoil_filter: {
				type: DataTypes.FLOAT,
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
			tableName: 'tbl_diffpress',
		}
	);
	return tbl_diffpress;
};
