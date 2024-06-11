
import { obtenerSkeaterId } from '../models/GetSkaterId.js';
import { putPerfilSkater } from '../models/PutPerfilSkater.js'
import { deletePerfilSkater } from '../models/DeletePerfilSkater.js'

export const vistaPerfil = async (req, res) => {
    try {
        const skater = req.user;
        //console.log(user)
        const skaterId = await obtenerSkeaterId(skater.id); 

        res.render('perfil', {
            layout: 'main',
            title: 'Skate Park',
            titleTabla: 'Perfil',
            skater: skaterId
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el perfil del skater');
    }
};

export const editarPerfilSkater = async(req,res) =>{
    const {nombre,password,anos_experiencia,especialidad} = req.body
    const skater = req.user.id
   // console.log('skater',skater)
    
    try {
        await putPerfilSkater(nombre,password,anos_experiencia,especialidad,skater)
        res.status(200).send('Perfil actualizado exitosamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el perfil del skater'); 
    }
}

export const eliminarPerfilSkater = async(req,res ) => {
    const skater = req.user.id
    try {
        await deletePerfilSkater(skater)
        res.status(200).send('Perfil eliminado exitosamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el perfil del skater'); 
    }
}

