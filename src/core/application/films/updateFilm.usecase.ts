import { Film } from "../../domain/film";
import { idType } from "../../domain/id.type";
import FilmRepository from "../../repositories/film.repository";
const UpdateFilm = (repository: FilmRepository, id: idType, film: Film) => {
    return repository.updateFilm(id, film);
};
export default UpdateFilm;
