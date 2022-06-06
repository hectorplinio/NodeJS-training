import express, { Router } from "express";
import filmController from "../controllers/filmController";
const router: Router = express.Router();
const filmRouter = (): Router => {
    router.get("/", filmController);
    router.post("/", filmController);
    return router;
};
export default filmRouter;
