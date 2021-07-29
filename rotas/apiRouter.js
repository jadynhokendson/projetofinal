var express = require('express');
const AdminController = require('../controller/AdminController');
const ChaveController = require('../controller/ChaveController');

//Carregar routers do Express
var router = express.Router();

router.get('/', (req, res) => {
    res.json({})
})

router.post('/login', AdminController.login)
router.post('/cadastro', ChaveController.register)


router.get('/cadastro', ChaveController.getAll)


router.put('/cadastro', ChaveController.atualizar)


module.exports = router;