import express, {Express, Request, Response} from 'express';
const path = require('path');
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname)));

app.get('/', function(request:Request, response: Response)
{
    response.json({sucesso:1})
});

app.get('/auth', function(request:Request, response: Response)
{
    response.json({sucesso:2})
});

app.listen(3000, function()
{
    console.log("back online!");
});

