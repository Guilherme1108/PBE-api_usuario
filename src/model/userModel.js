
//Simulação de um banco de dados em memória
let users = [
    {id:1, name: 'Doflamingo', email: 'doflamingo@gmail.com'},
    {id:2, name: 'Gardevoar', email: 'gardevoar@gmail.com'},
    {id:3, name: 'Draco', email: 'malfoy@gmail.com'}
];

// Função para buscar todos os usuários
const findAll = () => {
    return users; 
}

// Função para buscar um usuário por id
const findById = (id) => {
    return users.find(user => user.id === id);
}

//Função que adiciona um novo usuario
const create = (newUser) => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1; //isso é meio que um if, oque está antes do : ta dentro do if e oque estiver depois está no else
    const userWithId ={id: newId, ...newUser}
    users.push(userWithId);
    return userWithId;
}                     

//Exportar as funções
module.exports = {
    findAll,
    findById,
    create
}