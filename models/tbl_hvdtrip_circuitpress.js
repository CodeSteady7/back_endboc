module.exports = (sequelize, DataTypes) => {
	const tbl_hvdtrip_circuitpress = sequelize.define(
		'tbl_hvdtrip_circuitpress',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_hvdtrip_circuitpress: {
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
			tableName: 'tbl_hvdtrip_circuitpress',
		}
	);
	return tbl_hvdtrip_circuitpress;
};
