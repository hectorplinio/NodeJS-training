import { idType } from "../../domain/id.type";
import FilmRepository from "../../repositories/film.repository";
const GetFilmById = async (repository: FilmRepository, id: idType) => {
    return await repository.getFilmById(id);
};
export default GetFilmById;
