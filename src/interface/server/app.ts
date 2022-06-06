import express, { Application } from "express";
export const createServer = (port: number) => {
    const app: Application = express();
    app.use(express.json());
    app.get("/", (_req, res) => {
        res.send("<h1>Hello World</h1>");
    });
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
