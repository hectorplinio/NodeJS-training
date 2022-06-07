import { Film } from "../../../../core/domain/film";
import FilmORM from "../../../../infraestructure/adapters/films.repository";
import { Request, Response } from "express";

const createFilmController = async (req: Request, res: Response) => {
    try {
        const film: Film = req.body;
        const newFilm = await FilmORM().createFilm(film);
        console.log(newFilm);
        if (!newFilm.title) {
            return res.status(400).send({ message: newFilm });
        }
        return res.status(200).send({ film: newFilm });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};
export default createFilmController;
