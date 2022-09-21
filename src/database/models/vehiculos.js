module.exports = (sequelize, DataTypes) => {

    const alias = "Vehiculo";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fabricacion: {
            type: DataTypes.DATE
        },
        nuevo: {
            type: DataTypes.BOOLEAN
        },
        kilometro: {
            type: DataTypes.INTEGER
        },
        puertas: {
            type: DataTypes.INTEGER
        },
        combustible: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.INTEGER
        }
    };

    const config = {
        timestamp: false
    };

    const Vehiculo = sequelize.define(alias, cols, config);
    Vehiculo.associate = (models) => {
        Vehiculo.belongsTo(models.Venta, {
            foreignKey: "vehiculo_id",
            as: "ventavehiculo"   
        })
    }

    return Vehiculo;
}