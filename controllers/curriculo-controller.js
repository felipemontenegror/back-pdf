const handlerGetCurriculo = (req, res, next) => {
    res.render('curriculo', {
        nome: 'TESTE EJS'
    })
}

module.exports = {
    get: handlerGetCurriculo
}