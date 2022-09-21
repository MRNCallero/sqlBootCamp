const express = require('express');
const path = require('path');
const { sequelize } = require('./src/database/models')

// Require Rutas
const indexRouter = require('./routes/index');
const vehiculosRouter = require('./routes/vehiculosRouter');
const vendedoresRouter = require('./routes/vendedoresRouter');
const ventasRouter = require('./routes/ventasRouter');

const app = express()
app.use(express.json());

app.use('/', indexRouter);
app.use('/venta',ventasRouter);
app.use('/vendedor',vendedoresRouter);
app.use('/vehiculo',vehiculosRouter);


app.listen(3000,async() => {
     console.log("Servidor corriendo en puerto 3000")
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})


