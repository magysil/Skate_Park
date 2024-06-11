import pool from '../config/db.js';

export const putPerfilSkater = async (nombre,password,anos_experiencia,especialidad,id) =>{
    //console.log('salida',id)
    let client    
    const queryActualizar = {
        name : 'put-perfilSkater',
        text: "UPDATE skaters SET nombre = $1, password = $2, anos_experiencia = $3, especialidad = $4 WHERE id = $5 RETURNING *;",
        values: [nombre,password,anos_experiencia,especialidad,id]
    }
    try {
        client = await pool.connect();
        const result = await client.query(queryActualizar);
        //console.log('Salida putPerfil',result.rows[0])
        return result.rows[0]
    } catch(error){
        return console.error("Error de conexión o cosulta", error.code, error.message);
    }finally{
        if(client){
            client.release()
        }
    }
}