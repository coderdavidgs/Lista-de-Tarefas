const {Sequelize} = require('sequelize')

//you will need create a new database with name 'tasks'
const sequelize = new Sequelize('tasks', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Você está Conectado ao Banco')
} catch (error) {
    console.error('Não Conectou ao Banco de Dados', error)
}

module.exports = sequelize
