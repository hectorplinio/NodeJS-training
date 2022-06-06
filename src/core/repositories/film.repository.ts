import { Film } from "../domain/film.model";

export default interface FilmRepository {
    getAllFilms(): Promise<Film[]>;
}
