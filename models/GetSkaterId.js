import pool from '../config/db.js';

export const obtenerSkeaterId = async (id) => {
    let client;
    //console.log('id en get',id)
    const queryObtener = {
      name: 'get-skeatersId',
      text: "SELECT * FROM skaters WHERE id = $1;",
      values:[id]
    };
    try {
      client = await pool.connect();
      const result = await client.query(queryObtener);
      return result.rows[0];
    } catch (error) {
      console.error("Error de conexión o consulta", error.code, error.message);
    } finally {
      if (client) {
        client.release();
      }
    }
  };