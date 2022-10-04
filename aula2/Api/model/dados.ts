import { Sequelize, DataTypes, Model } from 'sequelize';

import { sequelize } from '../../sequelize';

export class consultaDoCorreio extends Model {
    
    declare url: string;
    declare xml: string;
    // declare PrazoEntrega: string;
    // declare ValorSemAdicionais: string;
    // declare ValorMaoPropria: string;
    // declare ValorAvisoRecebimento: string;
    // declare ValorValorDeclarado: string;
    // declare EntregaDomiciliar: string;
    // declare EntregaSabado: string;
    // declare obsFim: string;
    // declare Erro: string;
    // declare MsgErro: string;

    // declare birthday: string | null;
    // getFullname() {
    //     return [this.firstName, this.lastName].join(' ');
    // }
}

consultaDoCorreio.init(
    {

        url:
        {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        xml:
        {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        // PrazoEntrega:
        // {
        //     type: DataTypes.STRING,
        //     // allowNull: false,
        // },
        // ValorSemAdicionais:
        // {
        //     type: DataTypes.STRING,
        //     // allowNull: false,
        // },
        // ValorMaoPropria:
        // {
        //     type: DataTypes.STRING,
        //     // allowNull: false,
        // },
        // ValorAvisoRecebimento:
        // {
        //     type: DataTypes.STRING,
        //     // allowNull: false,
        // },
        // ValorValorDeclarado:
        // {
        //     type: DataTypes.STRING,
        //     // allowNull: false,
        // },
        // EntregaDomiciliar:
        // {
        //     type: DataTypes.STRING,
        //     // allowNull: false,
        // },
        // EntregaSabado:
        // {
        //     type: DataTypes.STRING,
        //     // allowNull: false,
        // },
        // obsFim:
        // {
        //     type: DataTypes.STRING,
        //     // allowNull: false,
        // },
        // Erro:
        // {
        //     type: DataTypes.STRING,
        //     // allowNull: false,
        // },
        // MsgErro:
        // {
        //     type: DataTypes.STRING,
        //     // allowNull: false,
        // },
    },
    {
        sequelize,
        modelName: 'ApiTS',
        tableName: 'apits',
        createdAt: 'criacao',
        updatedAt: 'alteracao'
    });