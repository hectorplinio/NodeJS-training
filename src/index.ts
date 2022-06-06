import database from "./infraestructure/database/database";
import { createServer } from "./interface/server/app";

export const startApp = () => {
    const port = Number(process.env.PORT) | 3000;

    database().connect();
    createServer(port).run();
};
startApp();
