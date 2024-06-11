import pool from '../config/db.js';
import bcrypt from 'bcrypt'

export const registerSkater = async(email, nombre, password, anos_experiencia, especialidad, foto) =>{
    let client     
    const hashedPassword = await bcrypt.hash(password, 10);
    const queryRegistrar = {
        name : 'add-skater',
        text: `INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        values: [email,nombre,hashedPassword,anos_experiencia,especialidad,foto,false]
    }
    try {
        client = await pool.connect();
        const result = await client.query(queryRegistrar);
       // console.log(result.rows)
        return result.rows
    } catch(error){
        return console.error("Error de conexión o cosulta", error.code, error.message);
    }finally{
        if(client){
            client.release()
        }
    }
}