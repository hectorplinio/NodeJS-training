import { Actor } from "../../core/domain/actor";
import actorModel from "../models/actor.model";

const ActorAdapter = (): ActorRepository => {
    return {
        getAllActors: async (): Promise<Actor[]> => {
            try {
                const actors = await actorModel.find();
                return actors;
            } catch (error) {
                return error.message;
            }
        }
    }