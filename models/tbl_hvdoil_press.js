module.exports = (sequelize, DataTypes) => {
	const tbl_hvdoil_press = sequelize.define(
		'tbl_hvdoil_press',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_hvdoil_press: {
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
			tableName: 'tbl_hvdoil_press',
		}
	);
	return tbl_hvdoil_press;
};
