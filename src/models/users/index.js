const { sequelize } = require('../config');
const { Sequelize } = require('sequelize');

const databaseConfig = sequelize

const Users = databaseConfig.define('users', {
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    googleID: {
        type: Sequelize.STRING
    },
    facebookID: {
        type: Sequelize.STRING
    },
    urlImg: {
        type: Sequelize.STRING
    }
})

async function insertUser(dataUser) {
    try {
        const syncro = await Users.sync();

        return Users.create(dataUser);
    } catch (error) {

        return { msg: 'problema ao sincronizar model com banco de dados', retorno: 'retornando direto da função', error }
    }

}

module.exports = {
    insertUser
}