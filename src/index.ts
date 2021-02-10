import cors from 'cors';
import Server from "./server/server";
import demoController from "./controller/demo.controller";

const port = process.env.port || 3000;
const server = Server.init(port);
server.app.use(cors());
server.app.use(demoController);
server.start(() => {
    console.log(`SERVER RUNNING IN PORT ${port}`);
})