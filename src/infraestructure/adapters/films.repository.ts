import filmModel from "../models/film.model";

export const getAllFilmsRepository = async () => {
    const films = await filmModel.find();
    return films;
};
