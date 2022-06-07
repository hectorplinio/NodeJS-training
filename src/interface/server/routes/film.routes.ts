import express, { Router } from "express";
import getAllFilmsController from "../controllers/film/getAllFilms.controller";
import createFilmController from "../controllers/film/createFilm.controller";
import { controllerWrapper } from "../wrappers/controller.wrapper";
import getFilmByIdController from "../controllers/film/getFilmById.controller";
import deleteFilmController from "../controllers/film/deleteFilm.controller";
import updateFilmController from "../controllers/film/updateFilm.controller";
const router: Router = express.Router();
const filmRouter = (): Router => {
    router.get("/film", controllerWrapper(getAllFilmsController));
    router.post("/film", controllerWrapper(createFilmController));
    router.get("/film/?id", controllerWrapper(getFilmByIdController));
    router.delete("/film", controllerWrapper(deleteFilmController));
    router.put("/film", controllerWrapper(updateFilmController));
    return router;
};
export default filmRouter;
