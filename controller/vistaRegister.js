import { registerSkater } from "../models/PostRegisterSkater.js"

export const vistaRegister = async (req,res) => {
    
    res.render("register",{
        layout:"main",
        title: "Skate Park",
        titleTabla:"Registro",
         
        
       
    })
}

export const registrarSkater = async (req, res) => {
    const { email, nombre, password, anos_experiencia, especialidad } = req.body;
    const { foto } = req.files
    //console.log(req.file)

    try {
        await foto.mv(`public/assets/imgs/${foto.name}`)
        await registerSkater(email, nombre, password, anos_experiencia, especialidad, foto.name);
        res.status(201).redirect('/login');
       

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar el skater');
    }
};