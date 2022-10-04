import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/indexDB";

class Votes extends Model { };

Votes.init(
    {
        id:
        {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        candidate:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        role:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        party:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize: sequelize,
        modelName: "Votos",
        tableName: "votos",

    },

);

// console.log(db === db.models.Login)
module.exports = Votes;