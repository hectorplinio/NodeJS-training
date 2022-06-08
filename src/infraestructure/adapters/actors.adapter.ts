import { Actor } from "../../core/domain/actor";
import { idType } from "../../core/domain/id.type";
import ActorRepository from "../../core/repositories/actor.repository";
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
        },
        getActorById: async (id: idType): Promise<Actor> => {
            try {
                const actor = await actorModel.findById(id);
                return actor;
            } catch (error) {
                return error.message;
            }
        },
        createActor: async (actor: Actor): Promise<Actor> => {
            try {
                const newActor = await actorModel.create(actor);
                return newActor;
            } catch (error) {
                return error.message;
            }
        },
        updateActor: async (id: idType, actor: Actor): Promise<Actor> => {
            try {
                const updatedActor = await actorModel.findByIdAndUpdate(
                    id,
                    actor,
                    {
                        new: true,
                    }
                );
                return updatedActor;
            } catch (error) {
                return error.message;
            }
        },
        deleteActor: async (id: idType): Promise<Actor> => {
            try {
                const deletedActor = await actorModel.findByIdAndDelete(id);
                return deletedActor;
            } catch (error) {
                return error.message;
            }
        },
    };
};
export default ActorAdapter;
