const express = require('express')
const routes = express.Router()

let db = [
    {'1': {Nome: 'Cliente 1', Idade: '20'}},
    {'2': {Nome: 'Cliente 2', Idade: '20'}},
    {'3': {Nome: 'Cliente 3', Idade: '20'}},
]

routes.get('/', (req, res) => {
    return res.json(db)
})

routes.post('/add', (req, res) => {
    const query = req.query

    console.log(query.imobiliaria)
    console.log(query.usuario)
    console.log(query.code)
    return res.status(200).end()
})

module.exports = routes