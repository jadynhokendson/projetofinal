const { Model, DataTypes } = require('sequelize')

class Admin extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            usuario: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },

            senha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            cpf: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        }, {
            sequelize,
            modelName: 'admin',
            paranoid: true
        })
    }
}

module.exports = Admin;