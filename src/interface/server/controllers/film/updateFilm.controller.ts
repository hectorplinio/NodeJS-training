import { updateFilm } from "../../../../core/application/films";
import { Film } from "../../../../core/domain/film";
import arrayExceptions from "../../../../infraestructure/tools/trim-fields/array-exceptions";
import trimFields from "../../../../infraestructure/tools/trim-fields/trim-fields";
const updateFilmController = async (req, res) => {
    const film: Film = trimFields(req.body, arrayExceptions);
    const newFilm = await updateFilm(film.id, film);
    if (!newFilm.title) return res.status(400).send({ message: newFilm });
    return res.status(200).send({ film: newFilm });
};
export default updateFilmController;
