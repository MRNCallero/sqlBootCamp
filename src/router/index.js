var express = require('express');
var router = express.Router();
const db = require('../../database/models')

/* GET home page. */
router.get('/', async(req, res, next) => {
  
  res.send(`<img width="250" src='/img/logo-DH.png' /><hr></hr><strong>Hola esto es un buscador de peliculas</strong>`);

});
/* GET home page. */
router.get('*', async(req, res, next) => {
  
    res.send(`<img width="250" src='/img/logo-DH.png' /><hr></hr><strong>Anda pa atras muchacho le erraste de URL</strong>`);
  
  });

module.exports = router;