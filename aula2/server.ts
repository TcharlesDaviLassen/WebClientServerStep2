import * as express from 'express';
import * as path from 'path';

const port = 3000;

let server: express.Application = express();
server.use(express.json());


server.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, './index.html'))

    //   res.send('The sedulous hyena ate the antelope!');
});

server.listen(port, function() {
    try {
        console.log(`server is listening on http://localhost:${port}`);
    } catch (error) {
        console.error(error + "Erro");

    }
});
