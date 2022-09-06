module.exports = (sequelize, DataTypes) => {
	const tbl_firststage_wheelspace = sequelize.define(
		'tbl_firststage_wheelspace',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_first_fwd2: {
				type: DataTypes.FLOAT,
			},
			value_first_fwd3: {
				type: DataTypes.FLOAT,
			},
			value_first_afd2: {
				type: DataTypes.FLOAT,
			},
			value_first_afd3: {
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
			tableName: 'tbl_firststage_wheelspace',
		}
	);
	return tbl_firststage_wheelspace;
};
