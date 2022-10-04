const {Router} = require("express");
const { check } = require("express-validator");
const { crearUsuario, loginUsuario, revalidarToken } = require("../controllers/auth.controller");
const { validarCamos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");


const router = Router();

router.post('/new',[
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('password','La contra es obligatoria').isLength({min:6}),
    validarCamos
], crearUsuario)

router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','La contra es obligatoria').isLength({min:6}),
    validarCamos
],loginUsuario)

router.get('/renew',validarJWT,revalidarToken)

module.exports = router