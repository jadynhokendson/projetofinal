const express = require('express')
const router = express.Router()


router.get('/login', (req, res) => {
    res.render('../pages/login')
})

router.get('/home', (req, res) => {
    res.render('../pages/home')
})

router.get('/cadastro', (req, res) => {
    res.render('../pages/cadastro')
})
router.post('/cadastro', (req, res) => {
    res.render('../pages/cadastro')
})




module.exports = router;