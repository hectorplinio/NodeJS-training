import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import filmRouter from "./routes/film.routes";
import actorRouter from "./routes/actor.routes";
export const createServer = (port: number) => {
    const app: Application = express();
    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    app.use(express.urlencoded({ extended: true }));

    app.use("/film", filmRouter());
    app.use("/actor", actorRouter());
    return {
        app: app,
        run: () => runServer(app, port),
    };
};

export const runServer = (app: Application, port: number) => {
    try {
        const server = app.listen(port, (): void => {
            console.log(`Connected successfully on port ${port}`);
        });
        return server;
    } catch (error: unknown) {
        console.log(error);
    }
};
