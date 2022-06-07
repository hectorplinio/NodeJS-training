import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import filmRouter from "./routes/film.routes";
export const createServer = (port: number) => {
    const app: Application = express();
    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    app.use(express.urlencoded({ extended: true }));

    app.use("/", filmRouter());
    return {
        app: app,
        run: () => runServer(app, port),
    };
};

export const runServer = (app: any, port: number) => {
    try {
        const server = app.listen(port, (): void => {
            console.log(`Connected successfully on port ${port}`);
        });
        return server;
    } catch (error: unknown) {
        console.log(error);
    }
};
