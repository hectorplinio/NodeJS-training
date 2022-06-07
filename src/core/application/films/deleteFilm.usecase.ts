import { idType } from "../../domain/id.type";
import FilmRepository from "../../repositories/film.repository";
const DeleteFilm = async (repository: FilmRepository, id: idType) => {
    return await repository.deleteFilm(id);
};
export default DeleteFilm;
