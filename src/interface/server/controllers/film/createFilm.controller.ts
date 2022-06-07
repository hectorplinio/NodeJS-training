import { Film } from "../../../../core/domain/film";
import trimFields from "../../../../infraestructure/tools/trim-fields/trim-fields";
import arrayExceptions from "../../../../infraestructure/tools/trim-fields/array-exceptions";
import { createFilm } from "../../../../core/application/films/index";

const createFilmController = async (req, res) => {
    const film: Film = trimFields(req.body, arrayExceptions);
    const newFilm = await createFilm(film);
    if (!newFilm.title) return res.status(400).send({ message: newFilm });
    return res.status(200).send({ film: newFilm });
};
export default createFilmController;
