module.exports = (sequelize, DataTypes) => {
    const ven = {
        id : {type : DataTypes.INTEGER,primaryKey: true, autoIncrement:true},
        Nombre : {type : DataTypes.STRING},
        Apellido : {type : DataTypes.STRING}
    }

    const vendedor = sequelize.define('Vendedores',ven,{tableName:"Vendedores",timestamps: false})
    vendedor.associate = (models) => {
        vendedor.hasMany(models.Venta,{
                as: "ventavendedor",
                foreignKey: "vendedor_id"
            })}

    return vendedor;
}