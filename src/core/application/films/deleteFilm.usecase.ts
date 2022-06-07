import { idType } from "../../domain/id.type";
import FilmRepository from "../../repositories/film.repository";

const DeleteFilm = async (repository: FilmRepository, id: idType) => {
    const film = await repository.deleteFilm(id);
    return film;
};
export default DeleteFilm;
