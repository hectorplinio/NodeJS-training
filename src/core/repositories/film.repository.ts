import { Film } from "../domain/film";
import { idType } from "../domain/id.type";

export default interface FilmRepository {
    getAllFilms(): Promise<Film[]>;
    getFilmById(id: idType): Promise<Film>;
    createFilm(film: Film): Promise<Film>;
    updateFilm(id: idType, film: Film): Promise<Film>;
    deleteFilm(id: idType): Promise<Film>;
}
