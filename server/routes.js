const express = require('express')
const axios = require('axios')
const {join} = require("path");
const routes = express.Router()
const path = require('path')

let db = [
    {'1': {Nome: 'Cliente 1', Idade: '20'}},
    {'2': {Nome: 'Cliente 2', Idade: '20'}},
    {'3': {Nome: 'Cliente 3', Idade: '20'}},
]

routes.get('/teste', (req, res) => {
    return res.sendFile(path.join(__dirname + '/index.html'))
})

module.exports = routes