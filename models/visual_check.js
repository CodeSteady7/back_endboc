module.exports = (sequelize, DataTypes) => {
	const visual_check = sequelize.define(
		'visual_check',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			l_o: {
				type: DataTypes.FLOAT,
			},
			temp: {
				type: DataTypes.FLOAT,
			},
			sound: {
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
			tableName: 'visual_check',
		}
	);
	return visual_check;
};
