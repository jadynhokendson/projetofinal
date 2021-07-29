const Sequelize = require('sequelize')
    // const Permissao = require('../models/Permission');
const Chave = require('../models/Chave')

module.exports = {

    async getAll(req, res) {
        const chaves = await Chave.findAll();
        res.json(chaves)
    },

    async register(req, res) {

        try {
            const { numero_chave, sala, status } = req.body
            const chaveCriada = await Chave.create({ numero_chave, sala, status })

            if (chaveCriada) {
                res.status(201).json({ chave: chaveCriada, created: true });
            }
        } catch (error) {
            res.status(400).json(error)
        }

    },

    async atualizar(req, res) {
        try {
            const { status, idStatus } = req.body
            const chaveAtualizada = await Chave.findByPk({ idStatus })
            await chaveAtualizada.update({ status })
            res.status(201).json({ chave: chaveAtualizada, created: true });

        } catch (error) {
            res.status(400).json(error)
        }

    }

}