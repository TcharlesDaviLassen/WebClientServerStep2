import { DataTypes, DecimalDataType, Model } from "sequelize";
import { sequelize } from "../db/indexDB";


export class Logs extends Model { };
// declare remetente: string;
// declare destinatario: string;
// declare data: Date;
// declare valor: DecimalDataType;

Logs.init(
    {
        id:
        {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        action:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        recepienId:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        senderId:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        value:
        {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
    },
    {
        sequelize: sequelize,
        modelName: "DadoPix",
        // createdAt: false,
        // updatedAt: false,
        tableName: "dadoPix",

    },

);

// console.log(db === db.models.Login)
// module.exports = Logs;