import express, { Router } from "express";
import getAllFilmsController from "../controllers/film/getAllFilms.controller";
import createFilmController from "../controllers/film/createFilm.controller";
import { controllerWrapper } from "../wrappers/controller.wrapper";
import getFilmByIdController from "../controllers/film/getFilmById.controller";
import deleteFilmController from "../controllers/film/deleteFilm.controller";
import updateFilmController from "../controllers/film/updateFilm.controller";
const router: Router = express.Router();
const filmRouter = (): Router => {
    router.get("/", controllerWrapper(getAllFilmsController));
    router.post("/", controllerWrapper(createFilmController));
    router.get("/?id", controllerWrapper(getFilmByIdController));
    router.delete("/", controllerWrapper(deleteFilmController));
    router.put("/", controllerWrapper(updateFilmController));
    return router;
};
export default filmRouter;
