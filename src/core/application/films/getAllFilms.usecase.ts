import FilmRepository from "../../repositories/film.repository";
const GetAllFilms = async (repository: FilmRepository) => {
    const films = await repository.getAllFilms();
    return films;
};
export default GetAllFilms;
