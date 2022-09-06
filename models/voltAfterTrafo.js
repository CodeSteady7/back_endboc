module.exports = (sequelize, DataTypes) => {
	const voltAfterTrafo = sequelize.define(
		'voltAfterTrafo',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			valueVolta1_2: {
				type: DataTypes.FLOAT,
			},
			valueVolta2_3: {
				type: DataTypes.FLOAT,
			},
			valueVolta3_1: {
				type: DataTypes.FLOAT,
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
			tableName: 'voltaftertrafo',
		}
	);
	return voltAfterTrafo;
};
