import express from 'express';
import {create} from 'express-handlebars'
import fileUpload from 'express-fileupload';

import { fileURLToPath } from 'url'
import { dirname } from "path";


// Variables que me permiten mostrar el path donde estoy en el proyecto
const __filename = fileURLToPath( import.meta.url )
const __dirname = dirname( __filename )

 import vistaHomeRoutes from '../routes/vistaHome.routes.js'
 import vistaRegisterRoutes from '../routes/vistaRegister.routes.js'
 import vistaLoginRoutes from '../routes/vistaLogin.routes.js'
 import vistaPerfilRoutes from '../routes/vistaPerfil.routes.js'
 import vistaAdminRoutes from '../routes/vistaAdmin.routes.js'
 
import apiRootPostSkaterRoute from '../routes/vistaRegister.routes.js'
import apiRootPostLoginRoute from '../routes/vistaLogin.routes.js'
import apiRootPutSkaterRoute from '../routes/vistaPerfil.routes.js'
import apiRootDeleteSkaterRoute from '../routes/vistaPerfil.routes.js'
import apiEditarEstadoSkaterRoute from '../routes/vistaAdmin.routes.js'

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8000;

        this.frontEndPaths = {
            rootHome:'/',
            rootRegister:'/registro',
            rootLogin:'/login',
            rootPerfil:'/perfil',
            rootAdmin:'/admin'
        }

        this.backEndApi = {
        rootRegistrarSkater:'/registro',
        rootLoginSkater:'/login',
        rootEditarPerfilSkater:'/perfil',
        rootEliminarPerfilSkater:'/perfil',
        rootEditarEstadoSkater:'/admin'

        }

        this.middlewares();
        this.routes();
        
    }

    middlewares(){
        this.app.use(express.json()); 
        this.app.use(express.urlencoded({ extended: false }));    
        this.app.use(express.static('public'));
        this.app.use('/js', express.static( `${__dirname}/../public/assets/js`));
        this.app.use('/css', express.static( `${__dirname}/../public/assets/css`));
        this.app.use('/imgs', express.static( `${__dirname}/../public/assets/imgs`));
        this.app.use('/bootstrap', express.static( `${__dirname}/../node_modules/bootstrap/dist`));
        this.app.use(fileUpload({
            limits: 5000000 ,// Definir que el límite para la carga de imágenes es de 5MB
            abortOnLimit :true,
            responseOnLimit : "El peso del archivo que deseas subir supera el limite permitido"//Responder con un mensaje indicando que se sobrepasó el límite especificado.
        }))
        //this.app.use('/jquery',express.static(  `${__dirname}/../node_modules/jquery/dist`));
        //this.app.use('/bootstrapIcons', express.static( `${__dirname}/../node_modules/bootstrap-icons/font`));

    }

    routes(){
       this.app.use(this.frontEndPaths.rootHome, vistaHomeRoutes);
       this.app.use(this.frontEndPaths.rootRegister, vistaRegisterRoutes)
       this.app.use(this.frontEndPaths.rootLogin, vistaLoginRoutes)
       this.app.use(this.frontEndPaths.rootPerfil, vistaPerfilRoutes)
       this.app.use(this.frontEndPaths.rootAdmin, vistaAdminRoutes)


       this.app.use(this.backEndApi. rootRegistrarSkater, apiRootPostSkaterRoute)
       this.app.use(this.backEndApi.rootLoginSkater, apiRootPostLoginRoute)
       this.app.use(this.backEndApi.rootEditarPerfilSkater, apiRootPutSkaterRoute)
       this.app.use(this.backEndApi. rootEliminarPerfilSkater, apiRootDeleteSkaterRoute)
       this.app.use(this.backEndApi. rootEditarEstadoSkater, apiEditarEstadoSkaterRoute)
    
    }

    initHandlebars(){

        this.hbs = create({
            partialsDir:[
                "views"
            ]
        })

        this.app.engine( "handlebars", this.hbs.engine );
        this.app.set("view engine","handlebars");
        
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        } )
    }
}

export default Server;