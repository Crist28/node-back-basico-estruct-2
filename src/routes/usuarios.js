const { Router } = require('express');

const {     
    usuarioGET,
    usuarioPOST,
    usuarioPUT,
    usuarioPATCH,
    usuarioDELETE } = require('../controllers/usuarios.controllers');

const router = Router();

router.get('/', usuarioGET );
router.post('/', usuarioPOST );
router.put('/', usuarioPUT );
router.delete('/', usuarioDELETE );
router.patch('/', usuarioPATCH );

module.exports = router;