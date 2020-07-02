const express = require('express');
const pedidosRouter = require('./routes/pedidos')
const clientesRouter = require('./routes/clientes')
const app = express();

app.use('/pedidos', pedidosRouter)
app.use('/clientes', clientesRouter)

module.exports = app;
