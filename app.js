const express = require('express');
const app = express();
var pedidos = {
    id: 1,
    ferramenta: 'iFood',
    pedido: 'PIZZA GRANDE DE CALABRESA',
    valor: 39.90,
    dataPeido: new Date
}
app.use('/', (req,res)=>{
    res.status(200)
    res.send({
        
         pedidos
    })
})
module.exports = app;
