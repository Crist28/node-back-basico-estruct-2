const { response, request } = require('express');

const usuarioGET = ( req = request, res = response ) => {

    res.json({
        msg: 'get Mensaje desde el controlador'
    })

}

const usuarioPOST = ( req, res ) => {

    res.json({
        msg: 'post Mensaje desde el controlador'
    })

}

const usuarioPUT = ( req, res ) => {

    res.json({
        msg: 'put Mensaje desde el controlador'
    })

}

const usuarioPATCH = ( req, res ) => {

    res.json({
        msg: 'patch Mensaje desde el controlador'
    })

}
const usuarioDELETE = ( req, res ) => {

    res.json({
        msg: 'delete Mensaje desde el controlador'
    })

}

module.exports = {

    usuarioGET,
    usuarioPOST,
    usuarioPUT,
    usuarioPATCH,
    usuarioDELETE

}