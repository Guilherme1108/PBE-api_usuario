
//Simulação de um banco de dados em memória
let users = [
    {id:1, name: 'Alice', email: 'alice@gmail.com'},
    {id:2, name: 'João', email: 'joao@gmail.com'},
    {id:3, name: 'Thiago', email: 'thiago@gmail.com'}
];

// Função para buscar todos os usuários
const findAll = () => {
    return users; 
}

// Função para buscar um usuário por id
const findBy= (id) => {
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
    findBy,
    create
}