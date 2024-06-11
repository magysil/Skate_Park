import pool from "../config/db.js";

export const getSkeaterEmail = async (email) => {
  const query = {
    text: "SELECT * FROM skaters WHERE email = $1",
    values: [email],
  };

  const client = await pool.connect();
  try {
    const result = await client.query(query);
    return result.rows[0];
  } catch (error) {
    console.error("Error de conexión o consulta", error.code, error.message);
  } finally {
    client.release();
  }
};
