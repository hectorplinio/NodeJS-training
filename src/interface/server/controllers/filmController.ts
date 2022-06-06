import NextFunction, { Response, Request } from "express";
const filmController = (_res: Response, _req: Request, _next: NextFunction) => {
    console.log("filmController");
    return "<h1>Hello Films</h1>";
};
export default filmController;
