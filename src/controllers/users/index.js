const { insertUser } = require('../../models/users');

async function setUser(dataUser) {
    if (dataUser) {
        const { graphDomain, name, email, urlImg, userID } = dataUser
        console.log('print do dataUser')
        console.log(dataUser)
        switch (graphDomain) {
            case "facebook":
                return await insertUser({name, email, facebookID: userID, urlImg});
            case "google":
                return await insertUser({name, email, googleID: userID, urlImg});
            default:
                return {message: 'forma de login ainda nao implementada'}
        }
    } else {
        return { message: "nenhuma informação enviada!" }
    }
}

module.exports = {
    setUser
}