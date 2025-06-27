import pool from "../db.js";
import jwt from 'jsonwebtoken'
const emailVerification = async (req ,res)=>{
       
        const { token } = req.query;
        try {
        const decode = jwt.decode(token, process.env.KEY_TOKEN);
        const { email, senha, user } = decode;
        await pool.query(
        "INSERT INTO usuarios (email,senhar,usuario) VALUES ($1,$2,$3) RETURNING *",
        [email, senha, user],
        );
        res.status(200).send("Usuario cadastrado")
        } catch{
        
        }
}

export default emailVerification;