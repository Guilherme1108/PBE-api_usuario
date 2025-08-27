//Importar o módulo do express
const express = require('express');

//Criar uma aplicação express
const app = express(); /* express é um servidor web (meio que uma biblioteca) */

//Definir a porta em que o servidor irá escutar
const porta = 8000;

//Definir a rota de teste da API
app.get('/', (req, res) => {
    res.send('API de usuários está funcionando')
})

//iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})