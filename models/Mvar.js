module.exports = (sequelize, DataTypes) => {
	const Mvar = sequelize.define(
		'Mvar',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},

			valueMeter_mvar: {
				type: DataTypes.STRING,
			},
			valueRecord_mvar: {
				type: DataTypes.STRING,
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
			tableName: 'mvar',
		}
	);
	return Mvar;
};
