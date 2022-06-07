import { Film } from "../../../../core/domain/film";
import FilmORM from "../../../../infraestructure/adapters/films.repository";
import { Request, Response } from "express";
import trimFields from "../../../../infraestructure/tools/trim-fields/trim-fields";
import arrayExceptions from "../../../../infraestructure/tools/trim-fields/array-exceptions";

const createFilmController = async (req: Request, res: Response) => {
    try {
        const film: Film = trimFields(req.body, arrayExceptions);
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
