const { response, json } = require("express")
const jwt = require("jsonwebtoken") 
const validarJWT = (req,res=response,next) => {
    const token = req.header('x-token')
    if (!token) { 
        return res.status(401).json({
            ok:false,
            msg:'Error en el token'
        })
    }
    try {
        const{uid,name}=jwt.verify(token,process.env.SECRET_JWT_SEED)
        req.body.uid=uid
        req.body.name=name
        console.log(uid,name)
    } catch (error) {
        return res.status(401).json({
            ok:false,
            msg:'Token no valido'
        })
    }
    next()
}

module.exports={
    validarJWT
}