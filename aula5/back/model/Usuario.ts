import { Sequelize, DataTypes, Model, IntegerDataType } from 'sequelize';
import sequelize from "../db/sequelize";

class Usuario extends Model {

  declare id: number;
  declare nome: string;
  declare senha: string;
  declare email: string;

  static async localizaUsuarios(email: string, senha: string) {
    return await Usuario.findOne({
      where: {
        email: email,
        senha: senha
      }
    });

  }
}

Usuario.init(
  {
    nome: {
      type: DataTypes.STRING
    },
    senha: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'Sessao',
    freezeTableName: true,
    tableName: 'sessao',
    timestamps: true,
    createdAt: 'criacao',
    updatedAt: 'alteracao'
  });


export default Usuario;