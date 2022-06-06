import filmModel from "../schema/film.schema";
export const getAllFilmsRepository = async () => {
    const films = await filmModel.find();
    return films;
};
