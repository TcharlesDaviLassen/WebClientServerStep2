import { DataTypes, Model } from 'sequelize';
const db = require('../db');

import  sequelize  from '../db/index'

class Log extends Model { }

Log.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.REAL(10, 2),
        allowNull: false
    },
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    recipientId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'logsPis',
    modelName: 'LogPix'
});

module.exports = Log;