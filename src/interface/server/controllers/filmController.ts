import FilmORM from "../../../infraestructure/adapters/films.repository";
import { Film } from "../../../core/domain/film";
const filmController = async (req, res) => {
    try {
        if (req.method === "GET") {
            const films: Array<Film> = await FilmORM().getAllFilms();
            console.log(films);
            return res.status(200).send({ films: films });
        }
        if (req.method === "POST") {
            const film: Film = req.body;
            const newFilm = await FilmORM().createFilm(film);
            console.log(newFilm);
            return res.status(200).send({ film: newFilm });
        }
        return res.status(404).send({ message: "Method not found" });
    } catch (error) {
        console.log(error);
    }
};
export default filmController;
