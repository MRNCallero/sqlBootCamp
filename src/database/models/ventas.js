module.exports = (sequelize, DataTypes) => {

    const alias = "Venta";

    const columnas = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        vehiculo_id:{
            type: DataTypes.INTEGER
        },
        vendedor_id:{
            type: DataTypes.INTEGER
        },
        FechaVenta:{
            type: DataTypes.DATE
        }
    }

    const extra = {
        tableName: "Ventas",
        timestamps: false
    }
    
    const Venta = sequelize.define(alias,columnas,extra);
    Venta.associate = (models) => {
        Venta.belongsTo(models.Vendedor,{
                as: "ventavendedor",
                foreignKey: "vendedor_id"
            })
        Venta.hasOne(models.Vehiculo,{
            as: "ventavehiculo",
            foreignKey : ""
        })
        }
    
    return Venta

}