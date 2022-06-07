import { Film } from "../domain/film";

export default interface FilmRepository {
    getAllFilms(): Promise<Film[]>;
    getFilmById(id: object): Promise<Film>;
    createFilm(film: Film): Promise<Film>;
    updateFilm(id: string, film: Film): Promise<Film>;
    deleteFilm(id: string): Promise<Film>;
}
