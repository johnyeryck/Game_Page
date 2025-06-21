import pool from "../db.js";
import jwt from 'jsonwebtoken'
const emailVerification = async (req ,res)=>{
        try{
                const { token } = req.query;
                const decode = jwt.decode(token , 'segredo')
                const { email , senha, user} = decode;
                console.log(email)
                await pool.query(
                        "INSERT INTO usuarios (email,senhar,usuario) VALUES ($1,$2,$3) RETURNING *",
                        [email, senha, user])
        }catch{

        }
    
}

export default emailVerification;