import { Film } from "../../../../core/domain/film";
import { getFilmById } from "../../../../core/application/films/index";
const getFilmByIdController = async (req, res) => {
    const id = req.body._id;
    const film: Film = await getFilmById(id);
    if (!film.title) return res.status(400).send({ message: film });
    return res.status(200).send({ films: film });
};
export default getFilmByIdController;
