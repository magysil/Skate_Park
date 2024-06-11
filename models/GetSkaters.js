import pool from '../config/db.js';

export const obtenerSkeaters = async () => {
    let client;
    const queryObtener = {
      name: 'get-skeaters',
      text: "SELECT * FROM skaters WHERE rol = 'Usuario' ORDER BY id;"
    };
    try {
      client = await pool.connect();
      const result = await client.query(queryObtener);
      return result.rows;
    } catch (error) {
      console.error("Error de conexión o consulta", error.code, error.message);
    } finally {
      if (client) {
        client.release();
      }
    }
  };