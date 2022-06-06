import { model } from "mongoose";
import { Film } from "../../core/domain/film";
import filmSchema from "../schema/film.schema";

const filmModel = model<Film>("Film", filmSchema);
export default filmModel;
