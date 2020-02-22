const nodemailer = require('nodemailer');
require('dotenv/config');

const user = 'Site Helplace <helplace2019@gmail.com>';
const adress = process.env.EMAIL_ADRESS;
const password = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: adress,
        pass: password
    }
})

async function sendMail({ name, email, subject, message }) {
    const bodyEmail = `Olá, voce tem uma nova mensagem eviada por <b>${name} ${email}</b><br />
        Segue abaixo a mensagem<br /><br />
        ${message}<br/><br/>
        Utilize as informações recebidas para entrar em contato com o interessado!
    `;
    const result = await transporter.sendMail({
        from: user,
        to: address,
        subject: subject,
        html: bodyEmail,
    })

    return result;
}

module.exports = {
    sendMail
}