import cors from 'cors';
import Server from "./server/App";
import apiv1 from './api/v1/index';
import SQLServer from "./context/shared/infraestructure/persistence/sql/SqlClient";

import swaggerUi from 'swagger-ui-express';
import swaggerFile from './../swagger-output.json';
import log from './logs/logger';
import dotEnv from 'dotenv';


dotEnv.config();

//import fileUpload from 'express-fileupload';


const port = process.env.port || 3000;
const server = Server.init(port);
server.app.use(cors());

server.app.use(apiv1);

server.app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

SQLServer.instance;
server.start(() => {
    log.info(`
        Server running on port: ${port},
        Environment: ${process.env.NODE_ENV}
  `);
})