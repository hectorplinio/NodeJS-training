import { Film } from "../../domain/film";
import FilmRepository from "../../repositories/film.repository";
const CreateFilm = async (repository: FilmRepository, film: Film) => {
    return await repository.createFilm(film);
};
export default CreateFilm;
