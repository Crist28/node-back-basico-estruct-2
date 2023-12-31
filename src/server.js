const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routesPath = '/api/usuarios';

        //Middleware
        this.middleware();

        //Rutas de mi aplicacion
        this.routes();

    }

    middleware(){

        //cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use( express.json() );

    }

    routes(){

        this.app.use( this.routesPath, require('./routes/usuarios'));

    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }

}

module.exports = {
    Server
}