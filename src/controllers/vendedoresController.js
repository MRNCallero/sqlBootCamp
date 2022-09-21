const db = require('../database/models');
const { sequelize } = require('../database/models');
const { where } = require('sequelize');
const Op = db.Sequelize.Op

const vendedoresController = {
    masVentas: (req, res) => {
        db.Vendedor.findAll({
            
        }).then(resultado => {
            res.send(resultado)
        })
    }
}

module.exports = vendedoresController;