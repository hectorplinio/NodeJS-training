import FilmORM from "../../../infraestructure/adapters/films.repository";
import { Film } from "../../domain/film";
import getAllFilmsUseCase from "./getAllFilms.usecase";
import CreateFilmUseCase from "./createFilm.usecase";
const filmRespository = FilmORM();

export const getAllFilms = () => getAllFilmsUseCase(filmRespository);
export const createFilm = (film: Film) =>
    CreateFilmUseCase(filmRespository, film);
