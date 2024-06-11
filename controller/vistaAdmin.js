import {obtenerSkeaters} from "../models/GetSkaters.js"
import{ putSkaterEstadoId } from "../models/PutSkaterEstadoId.js"

export const vistaAdmin = async (req,res) => {
   const skeaters = await obtenerSkeaters();
    res.render("admin",{
        layout:"main",
        title: "Skate Park",
        titleTabla:"Administración",
        skeaters: skeaters  
        
       
    })
}

export const actualizarEstadoSkater = async (req, res) => {
    const skaterId = req.params.id;
    const { estado } = req.body;  
   // console.log('Salida id Skater', skaterId)

    try {
        const result = await putSkaterEstadoId(skaterId, estado);

        if (result.rowCount === 0) {
            return res.status(404).send('Skater no encontrado');
        }

        res.status(200).send('Estado actualizado exitosamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el estado del skater');
    }
};