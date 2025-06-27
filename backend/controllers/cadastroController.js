import pool from "../db.js";
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()



 

const transporte = nodemailer.createTransport(
  {
    service:'gmail',
    auth:{
      user: 'johnyeryckdev@gmail.com',
      pass: process.env.EMAIL_PASS
    }
  }
)



const createUser = async (req, res) => {
    const { email, senha, user } = req.body;
    const verification = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email],
    );
  
  
  if(verification.rows.length === 0 ){
        const token = jwt.sign({email, senha , user} , process.env.KEY_TOKEN , {expiresIn : '5min'});
        const url = `http://localhost:5173/confirmar?token=${token}`
            
            const emaildata = {
              from: 'johnyeryckdev@gmail.com',
              to : email,
              subject: 'Confirme seu email',
              html: `<div style="background-color: black; height : 360px">
                     <h1 style="color: white">Para continuar a criação de sua conta no GamesHUB Clique no link para confirmar seu e-mail: </h1>
                    <button style="background-color: blueviolet;"><a href="${url}" style="text-decoration : none; color : white">Confirmar</a></button>
                    </div>`
              
            }
            
            transporte.sendMail(emaildata , (error, info)=>{
              if (error) return res.status(500).send(error);
              return res.send('Email de confirmação enviado')
            })
        
        
      }
    }
    
    

        
    
  

export default createUser;
