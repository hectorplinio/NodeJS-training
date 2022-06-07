import filmModel from "../models/film.model";
import { Film } from "../../core/domain/film";
import FilmRepository from "../../core/repositories/film.repository";
import { idType } from "../../core/domain/id.type";

const FilmORM = (): FilmRepository => {
    return {
        getAllFilms: async () => {
            try {
                const films = await filmModel.find();
                return films;
            } catch (error) {
                return error.message;
            }
        },
        getFilmById: async (id: idType) => {
            const film = await filmModel.findById(id);
            return film;
        },
        createFilm: async (film: Film) => {
            try {
                const newFilm = await filmModel.create(film);
                return newFilm;
            } catch (error) {
                return error.message;
            }
        },
        updateFilm: async (id: idType, film: Film) => {
            const updatedFilm = await filmModel.findByIdAndUpdate(id, film, {
                new: true,
            });
            return updatedFilm;
        },
        deleteFilm: async (id: idType) => {
            const deletedFilm = await filmModel.findByIdAndDelete(id);
            return deletedFilm;
        },
    };
};
export default FilmORM;
