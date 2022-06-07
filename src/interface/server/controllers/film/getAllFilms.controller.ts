import { Film } from "../../../../core/domain/film";
import { getAllFilms } from "../../../../core/application/films/index";
const getAllFilmsController = async (_req, res) => {
    try {
        const films: Array<Film> = await getAllFilms();
        console.log(films);
        if (!films) {
            return res.status(400).send({ message: "No films found" });
        }
        return res.status(200).send({ films: films });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};
export default getAllFilmsController;
