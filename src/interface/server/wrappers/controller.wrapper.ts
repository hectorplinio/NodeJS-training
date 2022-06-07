import { NextFunction, Response, Request } from "express";

export const controllerWrapper = (
    controller: (req: Request, res: Response) => Promise<Response | void>
) => {
    const run = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await controller(req, res);
        } catch (error: unknown) {
            console.log(error);
            return next(error);
        }
    };
    return run;
};
