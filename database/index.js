const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

//MODELOS
const Admin = require('../models/Admin');
const Chave = require('../models/Chave');


//INICIALIZACAO DOS MODELOS
Admin.init(connection)
Chave.init(connection)

//RELACIONAMENTOS

//ID de Permissao Vai Para Usuario
//Permissao.hasMany(Usuario);
//Usuario.belongsTo(Permissao);

//SYNC MODELOS

Admin.sync()
Chave.sync()

module.exports = connection;