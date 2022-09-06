module.exports = (sequelize, DataTypes) => {
	const voltBeforeTrafo = sequelize.define(
		'voltBeforeTrafo',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			valueV_BT: {
				type: DataTypes.FLOAT,
			},
			createdAt: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				defaultValue: DataTypes.NOW,
			},
			updatedAt: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				defaultValue: DataTypes.NOW,
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
			timestamps: false,
			tableName: 'voltbeforetrafo',
		}
	);
	return voltBeforeTrafo;
};
