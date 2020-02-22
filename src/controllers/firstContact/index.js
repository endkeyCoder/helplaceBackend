function setFirstContact({ businessDescription, techsInterest, observations }) {
    return { message: "dados recebidos com sucesso", data: { businessDescription, techsInterest, observations } }
}

module.exports = {
    setFirstContact
}