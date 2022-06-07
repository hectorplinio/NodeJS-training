import FilmORM from "../../../infraestructure/adapters/films.repository";
import { Film } from "../../domain/film";
import getAllFilmsUseCase from "./getAllFilms.usecase";
import CreateFilmUseCase from "./createFilm.usecase";
import GetFilmByIdUseCase from "./getFilmById.usecase";
import DeleteFilmUseCase from "./deleteFilm.usecase";
import UpdateFilmUseCase from "./updateFilm.usecase";
import { idType } from "../../domain/id.type";
const filmRespository = FilmORM();

export const getAllFilms = () => getAllFilmsUseCase(filmRespository);
export const getFilmById = (id: idType) =>
    GetFilmByIdUseCase(filmRespository, id);
export const createFilm = (film: Film) =>
    CreateFilmUseCase(filmRespository, film);
export const deleteFilm = (id: idType) =>
    DeleteFilmUseCase(filmRespository, id);
export const updateFilm = (id: idType, film: Film) =>
    UpdateFilmUseCase(filmRespository, id, film);
