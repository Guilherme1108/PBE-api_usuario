const express = require('express')

const router = express.Router()

const userController = require('../controller/userController')

//Criandoa as rotas da nossa API

//1° Rota para obter todos os usuarios
router.get('/', userController.getAllUsers)


// //2° Rota para obter dados  de um usuario por ID
router.get('/:id', userController.getUserById)


// //3° Rota para criar um novo usuario
router.post('/', userController.createUser)

module.exports = router;