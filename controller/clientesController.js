const mysql = require('../connection/db')

exports.getAll = async(req,res)=>{
    try {
        var result = await mysql.execute("SELECT * FROM clientes")
        const response = {
            clientes:result.map(client=>{
               return{
                   id: client.id,
                   nome: client.pedido,
                   contato: client.contato,
                   valorTotal: client.valorGasto
               }
           })
           
       }
           return res.status(500).send({response})
   
       } catch (error) {
           return res.status(500).send({error:error})
       }
    

}