import pool from "../db.js";
const createUser = async (req, res) => {
  const { email, senha, user } = req.body;

  const verification = await pool.query(
    "SELECT * FROM usuarios WHERE email = $1",
    [email],
  );

  try {
    if (verification.rows.length === 0) {
      await pool.query(
        "INSERT INTO usuarios (email,senhar,usuario) VALUES ($1,$2,$3) RETURNING *",
        [email, senha, user],
      );
    } else {
      return res.status(400).json({
        message: "Email já cadastrado",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Erro ao salvar no banco de dados",
      error: err.message,
      stack: err.stack,
    });
  }

  res.status(200).json({
    message: "Dados recebidos com sucesso",
  });
};

export default createUser;
