import pool from '../config/db.js'

export const putSkaterEstadoId = async (id,estado) =>{
    //console.log('salida',id, estado)
    let client    
    const queryActualizar = {
        name : 'put-perfilSkater',
        text: "UPDATE skaters SET estado = $1 WHERE id = $2 RETURNING *;",
        values: [estado, id]
    }
    try {
        client = await pool.connect();
        const result = await client.query(queryActualizar);
        //console.log('Salida put estado',result.rows[0])
        return result.rows[0]
    } catch(error){
        return console.error("Error de conexión o cosulta", error.code, error.message);
    }finally{
        if(client){
            client.release()
        }
    }
}