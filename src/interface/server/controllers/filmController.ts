import NextFunction, { Response, Request } from "express";
const filmController = (res: Response, _req: Request, _next: NextFunction) => {
    if (res.method === "GET") {
        console.log("GET");
    }
    if (res.method === "POST") {
        console.log("POST");
    }
    return "<h1>Hello Films</h1>";
};
export default filmController;
