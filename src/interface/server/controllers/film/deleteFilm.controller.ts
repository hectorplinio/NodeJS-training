import { Film } from "../../../../core/domain/film";
import { deleteFilm } from "../../../../core/application/films/index";
const deleteFilmController = async (req, res) => {
    const id = req.body.id;
    const film: Film = await deleteFilm(id);
    if (!film.title) return res.status(400).send({ message: film });
    return res.status(200).send({ message: "Film deleted", films: film });
};
export default deleteFilmController;
