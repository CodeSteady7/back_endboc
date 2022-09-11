module.exports = (sequelize, DataTypes) => {
	const loadAmp = sequelize.define(
		'loadAmp',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value1Loadamp: {
				type: DataTypes.STRING,
			},
			value2Loadamp: {
				type: DataTypes.STRING,
			},
			value3Loadamp: {
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
				type: DataTypes.STRING,
				allowNull: false,
			},
			name_table: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'loadamp',
		}
	);
	return loadAmp;
};
