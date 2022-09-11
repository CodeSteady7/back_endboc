module.exports = (sequelize, DataTypes) => {
	const Field = sequelize.define(
		'Field',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			valueVField: {
				type: DataTypes.STRING,
			},
			valueAField: {
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
			tableName: 'field',
		}
	);
	return Field;
};
