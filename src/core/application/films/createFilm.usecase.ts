import { Film } from "../../domain/film";
import FilmRepository from "../../repositories/film.repository";

const CreateFilm = async (repository: FilmRepository, film: Film) => {
    const newFilm = await repository.createFilm(film);
    return newFilm;
};
export default CreateFilm;
