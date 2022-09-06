module.exports = (sequelize, DataTypes) => {
	const tbl_compdisch_airpress = sequelize.define(
		'tbl_compdisch_airpress',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_afterporous_filter: {
				type: DataTypes.FLOAT,
			},
			value_for96cd: {
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
			tableName: 'tbl_compdisch_airpress',
		}
	);
	return tbl_compdisch_airpress;
};
