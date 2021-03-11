const express = require('express')
const path = require('path') // módulo nativo do node
const app = express()
const PORT = process.env.PORT || 3001;

const curriculoController = require('./controllers/curriculo-controller')

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')))


const handlerRaiz = (req, res, next) => {
    res.render('index', {
        nome: 'TESTE EJS'
    })
}

app.get('/', handlerRaiz)
app.get('/curriculo', curriculoController.get)


app.listen(PORT, () => {
    console.log(`running on port http://localhost:${PORT}`)
})