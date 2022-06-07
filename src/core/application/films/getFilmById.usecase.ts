import FilmRepository from "../../repositories/film.repository";
const getFilmById = async (repository: FilmRepository, id: object) => {
    const films = await repository.getFilmById(id);
    return films;
};
export default getFilmById;
