import FilmRepository from "../../repositories/film.repository";
const GetAllFilms = async (repository: FilmRepository) => {
    return await repository.getAllFilms();
};
export default GetAllFilms;
