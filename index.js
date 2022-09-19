


const mysql = require('mysql');
const express = require('express')
const fs = require('fs');

const app = express()
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    password: "",
    port: "6543",
    database: "Automotora",
    host: "localhost"
})

app.get('/',(req,res) => {
    const title = "Avatar"
    db.query('SELECT * FROM Vehiculo', (err,result) => {
    if(result) {
        console.table(result);
        res.send(result);
    }
    else console.log(err)
    })

})
app.post('/nuevovehiculo',(req,res) => {
    console.log(req.body);
    let {marca,modelo,fabricacion,nuevo,kilometraje,puertas,combustible,precio} = req.body;
    db.query(`INSERT INTO Vehiculo(Marca, Modelo,Fabricacion,Nuevo,Kilometraje,Puertas,Combustible,Precio) VALUES ('${marca}','${modelo}','${fabricacion}',${nuevo},${kilometraje},${puertas},'${combustible}',${precio})`, (err,result) => {
        if(result) {
            console.table(result);
            res.send(result);
        }else{
            console.log(err);        }
    })
})

app.post('/nuevovendedor',(req,res)=>{
    
    let {nombre,apellido} = req.body;
    db.query(`INSERT INTO Vendedores(Nombre, Apellido) VALUES ('${nombre}','${apellido}')`, (err,result) => {
        if(result) {
            console.table(result);
            res.send(result);
        }else{
            console.log(err);        }
    })
});

//Autos listados por marca
app.get('/autosmarca',(req,res) => {
    const title = "Avatar"
    db.query('SELECT * FROM Vehiculo GROUP BY Marca', (err,result) => {
    if(result) {
        console.table(result);
        res.send(result);
    }
    else console.log(err)
    })
})

//Autos listados por modelo
app.get('/autosmodelo',(req,res) => {
    const title = "Avatar"
    db.query('SELECT * FROM Vehiculo GROUP BY Modelo', (err,result) => {
    if(result) {
        console.table(result);
        res.send(result);
    }
    else console.log(err)
    })
})

//Autos listado por uso
app.get('/autosuso',(req,res) => {
    const title = "Avatar"
    db.query('SELECT * FROM Vehiculo GROUP BY Nuevo', (err,result) => {
    if(result) {
        console.table(result);
        res.send(result);
    }
    else console.log(err)
    })
})

//LISTADO POR AñO DE FABRICACION

app.get('/anioFab',(req,res) => {
    console.log(req.body);
    let {marca,modelo,fabricacion,nuevo,kilometraje,puertas,combustible,precio} = req.body;
    db.query(`select * from Vehiculo group by Fabricacion`, (err,result) => {
        if(result) {
            console.table(result);
            res.send(result);
        }else{
            console.log(err);        }
    })
})

//VEHICULOS DISP PARA VENTA

app.get('/anioFab',(req,res) => {
    console.log(req.body);
    let {marca,modelo,fabricacion,nuevo,kilometraje,puertas,combustible,precio} = req.body;
    db.query(`select * from Vehiculo where `, (err,result) => {
        if(result) {
            console.table(result);
            res.send(result);
        }else{
            console.log(err);        }
    })
})


// Vendedores

app.get('/vendedores/cantidad', (rep, res) => {
    db.query(`select nombre, apellido from Vendedores join Ventas group by Fabricacion`, (err,result) => {
        if(result) {
            console.table(result);
            res.send(result);
        }else{
            console.log(err);        
        }
    })
    
})


//// Periodoss

// Reporte de venta por año
app.get('/reporteporaño',(req,res)=>{
    
    db.query(`SELECT COUNT(*) FROM Ventas WHERE TIMESTAMPDIFF(YEAR,movies.release_date, NOW()) = 1`,(err,result)=>{
        if(result) {
            console.table(result);
            res.send(result);
        }else{
            console.log(err);        
        }
    });
    
})

app.get('/marcasMasVendidas',(req,res)=>{
    db.query('Select * From Vehiculo')
})


//let carts = fs.readFileSync('./cars.json','utf-8');
app.listen(3000,() => {
    db.connect(function(err) {  
        if (err) throw err;  
        console.log("Conectado a la db!");  
});  
    console.log("Servidor corriendo en puerto 3000")
})
