import { Film } from "../../../../core/domain/film";
import { getAllFilms } from "../../../../core/application/films/index";
const getAllFilmsController = async (_req, res) => {
    const films: Array<Film> = await getAllFilms();
    if (films.length === 0)
        return res.status(400).send({ message: "No films found" });
    return res.status(200).send({ films: films });
};
export default getAllFilmsController;
