const {response, request} = require('express')
const { validationResult } = require('express-validator')
const Usuario = require('../models/Usuario')
const bcrypy = require('bcryptjs')
const { generarJWT } = require('../helpers/jwt')

const crearUsuario = async (req,res=response)=>{
    const {email,name,password} = req.body

    try {
        //Vericar el email
        const usuario=await Usuario.findOne({email})
        if (usuario) {
            return res.status(400).json({
                ok:false,
                msg:'El usuario ya existe'
            }) 
        }

        //Crear usuario
        const DBusuario=new Usuario(req.body)
    
        //Hashear la contraseña
        const salt=bcrypy.genSaltSync()
        DBusuario.password=bcrypy.hashSync(password,salt)

        //Generar el jwt
        const token=await generarJWT(DBusuario.id,name)

        //Crear usuario de db
        await DBusuario.save();
    
        //Generar la respuesta exitosa
        return res.status(200).json({
            ok:true,
            uid:DBusuario.id,
            name,
            token
        }) 
        
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador'
        })
    }
}

const loginUsuario = async(req,res=response)=>{
    const {email,name,password} = req.body

    try {
        //Vericar el email
        const DBusuario=await Usuario.findOne({email})
        if (!DBusuario) {
            return res.status(400).json({
                ok:false,
                msg:'El correo no existe'
            }) 
        }

        //password match
        const validarPassword = bcrypy.compareSync(password,DBusuario.password)
        if (!validarPassword) {
            return res.status(400).json({
                ok:false,
                msg:'El password no es valido'
            }) 
        }

        //Generar el jwt
        const token=await generarJWT(DBusuario.id,DBusuario.name)
    
        //Generar la respuesta exitosa
        return res.status(200).json({
            ok:true,
            uid:DBusuario.id,
            name:DBusuario.name,
            token
        }) 
        
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador',
        })
    }
}

const revalidarToken = async(req,res)=>{
    const {uid,name} = req.body
    console.log(uid,name)
    const token=await generarJWT(uid,name)
    return res.json({
        ok:true,
        msg:'Renew /renew',
        uid:uid,
        name:name,
        token
        
    })
}

module.exports={
    crearUsuario,
    loginUsuario,
    revalidarToken
}