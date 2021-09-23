const express = require('express')
const router = express.Router()

const keycloak = require('../config/keycloak-config.js').getKeycloak()

//Primer ruta pertenece a anónimo 
router.get('/anonymous', function(req, res){
    res.send('Hello anonymous')
})

//Segunda ruta pertenece a usuario
router.get('/user', keycloak.protect('user'), function(req, res){
    res.send('Hello user')
})

//Tercer ruta pertenece al admin
router.get('/admin', keycloak.protect('admin'), function(req, res){
    res.send('Hello admin')
}) 

//Cuarta ruta pertenece al usuario y al admin
router.get('/all-user', keycloak.protect(['user' , 'admin']),function(req, res){
    res.send('Hello all user')
})

module.exports = router