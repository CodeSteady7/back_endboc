module.exports = (sequelize, DataTypes) => {
	const tbl_second_wheelspace = sequelize.define(
		'tbl_second_wheelspace',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_second_fwd2: {
				type: DataTypes.FLOAT,
			},
			value_second_fwd3: {
				type: DataTypes.FLOAT,
			},
			value_second_aft1: {
				type: DataTypes.FLOAT,
			},
			value_second_aft2: {
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
			tableName: 'tbl_second_wheelspace',
		}
	);
	return tbl_second_wheelspace;
};
