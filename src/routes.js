const { Router } = require('express');
const { sendMail } = require('./controllers/email');
const { setFirstContact } = require('./controllers/firstContact');
const { setUser } = require('./controllers/users');
require('dotenv/config');
const routes = Router();

routes.get('', async (req, res) => {
    res.send({ message: `Favor entrar em contato com ${process.env.EMAIL_ADRESS} para utilização dessa api` })
})

routes.post('/sendMail', async (req, res) => {
    //const result = await sendMail(req.body);
    res.send({message: 'rota de email ok'});
})

routes.post('/firstContact', async (req, res) => {
    const result = await setFirstContact(req.body);
    res.send(result);
})

routes.post('/setUser', async (req, res) => {
    const result = await setUser(req.body);

    res.send({message: 'informação recebida com sucesso', data: result})
})

module.exports = routes;