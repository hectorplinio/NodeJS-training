import { model } from "mongoose";
import { Actor } from "../../core/domain/actor";
import actorSchema from "../schema/actor.schema";

const actorModel = model<Actor>("Actor", actorSchema);
export default actorModel;
