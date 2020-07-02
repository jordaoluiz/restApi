const mysql = require('../connection/db')

exports.getAllPedidos = async(req,res,next)=>{
    try {
        const result = await mysql.execute("SELECT * FROM pedidos");
        const response = {
         pedidos:result.map(prod=>{
            return{
                id: prod.id,
                pedido: prod.pedido,
                valor: prod.valorPedido,
                fonte: prod.fontePedido
            }
        })
        
    }
        return res.status(500).send({response})

    } catch (error) {
        return res.status(500).send({error:error})
    }
}
exports.getOnePedido =  async(req,res,next)=>{
    try {
        const result = await mysql.execute("SELECT * FROM pedidos WHERE id = ?",[req.params.id]);
        const response = {
        quantidade: result.map(prod=>{
            return{
                id: prod.id,
                pedido: prod.pedido,
                valor: prod.valorPedido,
                fonte: prod.fontePedido
            }
        })
        
    }
        return res.status(500).send({response})

    } catch (error) {
        return res.status(500).send({error:error})
    }
}
