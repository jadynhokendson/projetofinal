const Sequelize = require('sequelize');
// const Permissao = require('../models/Permission');
const Admin = require('../models/Admin')

module.exports = {

    async getAll(req, res) {
        const admins = await Admin.findAll();
        res.json(admins)
    },

    async getById(req, res) {
        const admin = await Admin.findByPk(req.params.id)
        res.json(admin)
    },

    async login(req, res) {
        try {
            const { usuario, senha } = req.body
            const adminLogin = await Admin.findOne({
                where: {
                    usuario: usuario
                }
            })

            if (adminLogin.senha == senha) {
                res.json(adminLogin)
            } else {
                res.status(401).json({ error: 'Falha de permissao ou / senha' })
            }
        } catch (error) {
            res.status(400).json({ error: 'Falha de permissao ou / senha', message: error.message })
        }
    },

    async register(req, res) {

        try {
            const { nome, usuario, senha, cpf } = req.body
            const adminCriado = await Admin.create({ nome, usuario, senha, cpf })

            if (adminCriado) {
                res.status(201).json({ user: adminCriado, created: true });
            }
        } catch (error) {
            res.status(400).json(error)
        }

    }

}