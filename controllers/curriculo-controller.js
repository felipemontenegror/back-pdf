const handlerGetCurriculo = (req, res, next) => {
    res.render('curriculo-form', {
        
        nome: 'TESTE EJS'
    })
}


const handlerPostCurriculo = (req, res, next) => {
    
    console.log(req)
    
    res.send({
        
        mensagem: 'test POST curriculo'
    })
}

module.exports = {
    CurriculoGet: handlerGetCurriculo,
    CurriculoPost: handlerPostCurriculo
}