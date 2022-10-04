import * as express from "express";
import * as bodyParser from "body-parser" //npm install body-parser
import * as path from 'path';
import fetch from 'node-fetch'; //npm instal node-fetch@2.6.6
import * as xml2js from 'xml2js'; //npm install xml2js
//npm install @types/node --save-dev
import { consultaDoCorreio } from './model/dados';


consultaDoCorreio.sync();
// const params = "sCepOrigem=95912024&sCepDestino=95900718&nVlPeso=30&nCdFormato=1&nVlComprimento=28.75&nVlAltura=11.5&nVlLargura=11.5&nVlDiametro=0&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&StrRetorno=xml&nCdServico=41106"

let server: express.Application = express();
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json());

server.get("/", async function (req, res) {
    let result = await consultaCorreio(req.url);
    res.json(result)
});

server.listen(3000, function () {
    console.log(`Server operacional!`);
});

async function consultaCorreio(params: string) {
    let xml = '';
    let cache = await consultaDoCorreio.findOne(
        {
            where: {
                url: params
            }
        }
    )

    if (cache) {
        xml = cache.xml;
    } else {
        let url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx/?'+params;
        const response = await fetch(url);
        xml = await response.text();

        consultaDoCorreio.create({
            url: params,
            xml: xml
        });
    }

    const json: any = await xml2js.parseStringPromise(xml);
    return JSON.parse(JSON.stringify(json));
}