const db = require('../database/models/index');
const { sequelize } = require('../database/models');
const { where } = require('sequelize');
const Op = db.Sequelize.Op
const vehiculosController = {
    list : async(req,res)=>{
        try{
            let vehiculos = await db.Vehiculo.findAll();
            if(vehiculos){
                res.status(200).json({
                    ok: true,
                    msg: 'Lista de vehiculos',
                    vehiculos: vehiculos
                })
            }else{
                res.status(400).json({
                    ok: false,
                    msg: 'Bad request'
                })
            }
        }catch(e){
            console.log(e);
            res.status(500).json({
                ok:false,
                msg:"Fatal Error"
            })
        }
    },
    listMarca: async(req,res)=>{
        try{
            let marca = req.query.marca;
            if(marca){
            let vehiculos = await db.Vehiculo.findAll({
                where:{
                    marca: marca
                }
            });
            if(vehiculos){
                res.status(200).json({
                    ok: true,
                    msg: 'Lista de vehiculos por marca',
                    vehiculos: vehiculos
                })
            }else{
                res.status(404).json({
                    ok: false,
                    msg: 'Not found'
                })
            }
        }else{
            res.status(400).json({
                ok: false,
                msg: 'Bad request'
            })
        }
        }catch(e){
            console.log(e);
            res.status(500).json({
                ok:false,
                msg:"Fatal Error"
            })
        }
    },
    listModelo: async(req,res)=>{
        try{
            let modelo = req.query.modelo;
            if(modelo){
            let vehiculos = await db.Vehiculo.findAll({
                where:{
                    modelo : modelo
                }
            });
            if(vehiculos){
                res.status(200).json({
                    ok: true,
                    msg: 'Lista de vehiculos por modelo',
                    vehiculos: vehiculos
                })
            }else{
                res.status(404).json({
                    ok: false,
                    msg: 'Not found'
                })
            }
        }else{
            res.status(400).json({
                ok: false,
                msg: 'Bad request'
            })
        }
        }catch(e){
            console.log(e);
            res.status(500).json({
                ok:false,
                msg:"Fatal Error"
            })
        }
    },
    listUsados: async(req,res)=>{
        try{
            let vehiculos = await db.Vehiculo.findAll({
                where:{
                   nuevo : false
                }
            });
            if(vehiculos){
                res.status(200).json({
                    ok: true,
                    msg: 'Lista de vehiculos Usados',
                    vehiculos: vehiculos
                })
            }else{
                res.status(404).json({
                    ok: false,
                    msg: 'Not found'
                })
            }
        }catch(e){
            console.log(e);
            res.status(500).json({
                ok:false,
                msg:"Fatal Error"
            })
        }
    },
    listNuevos: async(req,res)=>{
        try{
            let vehiculos = await db.Vehiculo.findAll({
                where:{
                   nuevo : true
                }
            });
            if(vehiculos){
                res.status(200).json({
                    ok: true,
                    msg: 'Lista de vehiculos Nuevos',
                    vehiculos: vehiculos
                })
            }else{
                res.status(404).json({
                    ok: false,
                    msg: 'Not found'
                })
            }
        }catch(e){
            console.log(e);
            res.status(500).json({
                ok:false,
                msg:"Fatal Error"
            })
        }
    },
    listYear: async(req,res)=>{
        try{
            let year = req.params.year;
            if(year){
            let vehiculos = await db.Vehiculo.findAll({
                where:{
                    year: year
                }
            });
            if(vehiculos){
                res.status(200).json({
                    ok: true,
                    msg: 'Lista de vehiculos por anio',
                    vehiculos: vehiculos
                })
            }else{
                res.status(404).json({
                    ok: false,
                    msg: 'Not found'
                })
            }
        }else{
            res.status(400).json({
                ok: false,
                msg: 'Bad request'
            })
        }
        }catch(e){
            console.log(e);
            res.status(500).json({
                ok:false,
                msg:"Fatal Error"
            })
        }
    },
    listVendidos: async(req,res)=>{
        try{
            let year = req.params.year;
            if(year){
            let vehiculos = await db.Vehiculo.findAll({
                where:{
                    year: year
                }
            });
            if(vehiculos){
                res.status(200).json({
                    ok: true,
                    msg: 'Lista de vehiculos por anio',
                    vehiculos: vehiculos
                })
            }else{
                res.status(404).json({
                    ok: false,
                    msg: 'Not found'
                })
            }
        }else{
            res.status(400).json({
                ok: false,
                msg: 'Bad request'
            })
        }
        }catch(e){
            console.log(e);
            res.status(500).json({
                ok:false,
                msg:"Fatal Error"
            })
        }
    }
}
module.exports = vehiculosController;