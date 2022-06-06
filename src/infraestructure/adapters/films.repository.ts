import filmModel from "../models/film.model";
import { Film } from "../../core/domain/film";
import FilmRepository from "../../core/repositories/film.repository";

const FilmORM = (): FilmRepository => {
    return {
        getAllFilms: async () => {
            const films = await filmModel.find();
            return films;
        },
        getFilmById: async (id: string) => {
            const film = await filmModel.findById(id);
            return film;
        },
        createFilm: async (film: Film) => {
            const newFilm = await filmModel.create(film);
            return newFilm;
        },
        updateFilm: async (id: string, film: Film) => {
            const updatedFilm = await filmModel.findByIdAndUpdate(id, film, {
                new: true,
            });
            return updatedFilm;
        },
        deleteFilm: async (id: string) => {
            const deletedFilm = await filmModel.findByIdAndDelete(id);
            return deletedFilm;
        },
    };
};
export default FilmORM;
