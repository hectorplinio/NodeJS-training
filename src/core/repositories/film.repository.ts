import { Film } from "../domain/film";

export default interface FilmRepository {
    getAllFilms(): Promise<Film[]>;
}
