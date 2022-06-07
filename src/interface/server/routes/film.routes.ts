import express, { Router } from "express";
import getAllFilmsController from "../controllers/film/getAllFilms.controller";
import createFilmController from "../controllers/film/createFilm.controller";
import { controllerWrapper } from "../wrappers/controller.wrapper";
const router: Router = express.Router();
const filmRouter = (): Router => {
    console.log("Entro a filmRouter");
    router.get("/film", controllerWrapper(getAllFilmsController));
    router.post("/film", controllerWrapper(createFilmController));
    return router;
};
export default filmRouter;
