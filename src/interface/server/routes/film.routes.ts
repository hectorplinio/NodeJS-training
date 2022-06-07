import express, { Router } from "express";
import getAllFilmsController from "../controllers/film/getAllFilms.controller";
import createFilmController from "../controllers/film/createFilm.controller";
import { controllerWrapper } from "../wrappers/controller.wrapper";
import getFilmByIdController from "../controllers/film/getFilmById.controller";
const router: Router = express.Router();
const filmRouter = (): Router => {
    router.get("/film", controllerWrapper(getAllFilmsController));
    router.post("/film", controllerWrapper(createFilmController));
    router.get("/film/?id", controllerWrapper(getFilmByIdController));
    return router;
};
export default filmRouter;
