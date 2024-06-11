import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import { getSkeaterEmail } from '../models/PostLoginSkater.js'; 

const secretKey = process.env.SECRET_KEY
export const vistaLogin= async (req,res) => {    
    res.render("Login",{
        layout:"main",
        title: "Skate Park",
        titleTabla:"Iniciar Sesión"        
       
    })
}

export const loginSkeater = async (req, res) => {
    const { email, password } = req.body;
    //console.log('reqbody',req.body)

    try {        
        const skeater = await getSkeaterEmail(email);
        //console.log('skeater',skeater)
        if (!skeater) {
            return res.status(401).send('Usuario no encontrado');        }

        
        const passwordCoincide = await bcrypt.compare(password, skeater.password);
        if (!passwordCoincide) {
            return res.status(401).send('Contraseña incorrecta');
        }

      
        const token = jwt.sign(
            { 
             exp: Math.floor(Date.now() / 1000) + 900, //Dura 15 min
             id:skeater.id,
             email:skeater.email
            
            }, secretKey
        );
        //console.log('este es el token',token)
        res.json({ token, skeater });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al iniciar sesión');
    }
};
