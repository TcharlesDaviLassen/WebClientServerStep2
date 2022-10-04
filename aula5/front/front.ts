import express, {Express, Request, Response} from 'express';
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.listen(8080, function()
{
    console.log("Front online!");
});
