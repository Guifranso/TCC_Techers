const Usuario = require('../models/usuarios')

module.exports = app => {
    app.get('/usuarios', (req, res) => {
        Usuario(req, res, next),  Usuario.lista(res)
    })
    app.post('/registrarUsuario', (req, res) => {
        const usuario = req.body
        Usuario.adiciona(usuario, res)
    }) 
    app.post('/login', (req, res) => {
        const usuario = req.body
        Usuario.autentica(usuario, res)
    }) 
}