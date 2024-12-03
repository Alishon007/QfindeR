let DataTypes = require('sequelize');
let sequelize = require('../config/db');
const Entidad = require('./Entidades');

let Cuidadores = sequelize.define(
    'Cuidadores',{
        Nombre:{
            type:DataTypes.STRING,
            allowNull: true
            
        },
        Edad:{
            type:DataTypes.INTEGER,
            allowNull: true
            
        },
        Estudios:{
            type:DataTypes.STRING,
            allowNull: true
        },
        EntidadID:{
            type:DataTypes.INTEGER,
            references:{
                model: Entidad,
                key:'id'
            }
        }
    },
    {
        timestamps:false,
        tableName:'cuidadores'
    }
);
// Crear la relacion
Cuidadores.belongsTo(Entidad, { foreignKey: 'EntidadID' });


module.exports = Cuidadores;