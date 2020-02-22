const { Sequelize, Model, DataTypes } = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: process.env.DATABASE_DIALECT,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT
    }
);

const testConnection = () => {
    sequelize.authenticate().then((good) => {
        console.log('all okay!');
        console.log(good);
        return { msg: 'tudo certo como banco', data: good }
    }).catch((bad) => {
        console.log('very bad ...');
        console.log(bad);
        return { msg: 'problemas com o banco', data: bad }
    });
}

module.exports = {
    testConnection,
    sequelize
}