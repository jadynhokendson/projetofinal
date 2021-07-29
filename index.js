const express = require('express')
const cors = require('cors')
const pageRouter = require('./rotas/pageRouter')
const apiRouter = require('./rotas/apiRouter')
const app = express();
require('./database')

app.use(cors({
    origin: '*'
}))

app.use(express.json());
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/pages'));

app.use('/', pageRouter)
app.use('/api/', apiRouter)

app.listen(3000, () => console.log('Servidor Rodando'))