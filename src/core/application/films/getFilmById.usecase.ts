import { idType } from "../../domain/id.type";
import FilmRepository from "../../repositories/film.repository";
const getFilmById = async (repository: FilmRepository, id: idType) => {
    const films = await repository.getFilmById(id);
    return films;
};
export default getFilmById;
