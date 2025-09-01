
const userModel = require('../model/userModel')

//Método do controlador para lista todos os usuários
const getAllUsers = (req, res) => {
    const users = userModel.findAll();
    res.status(200).json(users);
}

// Método do controlador para obter um usuário por id
const getUserById = (req, res) => {

    //pegando o id que foi enviado na requisição
    const id = parseInt(req.params.id)

    //Chamando o método findById do userModel
    const user = userModel.findById(id)

    if(user){
        //responder com status code de 200 (Sucesso)
        //e devovler os dados do usuário em formado json
        res.status(200).json(user)
    } else {
        res.status(404).json({ mensagem: 'usuário não encontrado no banco de dados!'})
    }
}

// Método do controlador para criar um novo usuário
const createUser = (req, res) => {

    //Pegando os dados que foram enviador pelo body (corpo) da requisição
    const {name, email} = req.body

    //validar se foram enviados
    if(!name || !email){
        return res.status(400).json({mensagem: "Nome e email são obrigatórios"})
    } else {
        const newUser = userModel.create({name, email})
        res.status(201).json({newUser})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}