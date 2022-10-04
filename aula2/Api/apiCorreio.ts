import fetch from 'node-fetch';
import * as xml2js from 'xml2js';
import * as path from 'path';
import * as fs from 'fs';
import { URLSearchParams } from "url"

let dados = []

async function main() {
    //npm install @types/node --save-dev
    let url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?sCepOrigem=95912024&sCepDestino=95900718&nVlPeso=30&nCdFormato=1&nVlComprimento=28.75&nVlAltura=11.5&nVlLargura=11.5&nVlDiametro=0&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&StrRetorno=xml&nCdServico=41106';

    const response = await fetch(url);
    const xml = await response.text();

    const json: any = await xml2js.parseStringPromise(xml);

    // console.log(JSON.stringify(json));

    let dado = (JSON.stringify(json));

    // await dado.save();

    console.log(dado)

    // fs.writeFile('file.json', dado, function (err) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log("Gravado");
    // });

    //console.log(json.Servicos.cServico[0].Valor[0]);
}

main();