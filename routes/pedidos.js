const express = require('express');
const app = express();
const pedidosController = require('../controller/pedidosController')

// get info from all  purchases 
app.get('/',pedidosController.getAllPedidos)
// get info from  specific purchase id 
app.get('/:id',pedidosController.getOnePedido)

module.exports = app