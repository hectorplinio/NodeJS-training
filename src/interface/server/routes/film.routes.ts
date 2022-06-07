import express, { Router } from "express";
import getAllFilmsController from "../controllers/film/getAllFilms.controller";
import createFilmController from "../controllers/film/createFilm.controller";
const router: Router = express.Router();
const filmRouter = (): Router => {
    console.log("Entro a filmRouter");
    router.get("/film", getAllFilmsController);
    router.post("/film", createFilmController);
    return router;
};
export default filmRouter;
