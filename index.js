const express = require('express')

const path = require('path') // módulo nativo do node
const app = express()
const PORT = process.env.PORT || 3001;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res, next) => {
    res.render('index', {
        nome: 'TESTE EJS'
    })
})

app.listen(PORT, () => {
    console.log(`running on port http://localhost:${PORT}`)
})