import filmModel from "../models/film.model";
import { Film } from "../../core/domain/film";

export const getAllFilmsRepository = async () => {
    const films = await filmModel.find();
    return films;
};
export const getFilmByIdRepository = async (id: string) => {
    const film = await filmModel.findById(id);
    return film;
};
export const createFilmRepository = async (film: Film) => {
    const newFilm = await filmModel.create(film);
    return newFilm;
};
export const updateFilmRepository = async (id: string, film: Film) => {
    const updatedFilm = await filmModel.findByIdAndUpdate(id, film, {
        new: true,
    });
    return updatedFilm;
};
export const deleteFilmRepository = async (id: string) => {
    const deletedFilm = await filmModel.findByIdAndDelete(id);
    return deletedFilm;
};
