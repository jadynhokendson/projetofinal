const { Model, DataTypes } = require('sequelize')

class Chave extends Model {
    static init(sequelize) {
        super.init({
            numero_chave: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true

            },
            sala: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }

        }, {
            sequelize,
            modelName: 'chave',
            paranoid: true
        })
    }
}

module.exports = Chave;