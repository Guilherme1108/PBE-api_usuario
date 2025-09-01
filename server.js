//Importar o módulo do express
const express = require('express');

//Importar as rotas de usuarios
const userRoutes = require('./src/routes/userRoutes')

//Criar uma aplicação express
const app = express(); /* express é um servidor web (meio que uma biblioteca) */

//Definir um Middleware para analisar json corpo das requisições
app.use(express.json())

//Definir a porta em que o servidor irá escutar
const porta = 8000;

//Definir a rota de teste da API
app.get('/', (req, res) => {
    res.send('API de usuários está funcionando 😵‍💫😵‍💫😵‍💫')
})

// Usando as rotas de usuarios
app.use('/api/users', userRoutes)

//iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})