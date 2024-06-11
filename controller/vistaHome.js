import {obtenerSkeaters} from "../models/GetSkaters.js"

export const vistaHome = async (req,res) => {
    const skeaters = await obtenerSkeaters();
    res.render("home",{
        layout:"main",
        title: "Skate Park",
        titleTabla:"Lista de Participantes",
        skeaters: skeaters  
        
       
    })
}