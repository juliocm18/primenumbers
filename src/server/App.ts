import express = require('express');
import path = require('path');


export default class Server {

    public app: express.Application;
    public port: number;
    constructor(puerto: number) {
        this.port = puerto;
        this.app = express();
        var bodyParser = require('body-parser');
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
        //this.app.use( fileUpload({ useTempFiles: true }) );
    }

    static init(port: any) {
        return new Server(port);
    }

    private publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));

    }

    start(callback: () => void) {
        this.app.listen(this.port, callback);
        this.publicFolder();
    }
}