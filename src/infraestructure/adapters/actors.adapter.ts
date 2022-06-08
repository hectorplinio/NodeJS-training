import { Actor } from "../../core/domain/actor";
import { idType } from "../../core/domain/id.type";
import ActorRepository from "../../core/repositories/actor.repository";
import actorModel from "../models/actor.model";
import CustomError from "../../core/errors/custom-error";

const ActorAdapter = (): ActorRepository => {
    return {
        getAllActors: async (): Promise<Actor[]> => {
            try {
                const actors = await actorModel.find();
                return actors;
            } catch (error) {
                throw new CustomError(error);
            }
        },
        getActorById: async (id: idType): Promise<Actor> => {
            try {
                const actor = await actorModel.findById(id);
                return actor;
            } catch (error) {
                throw new CustomError(error);
            }
        },
        createActor: async (actor: Actor): Promise<Actor> => {
            try {
                const newActor = await actorModel.create(actor);
                return newActor;
            } catch (error) {
                throw new CustomError(error);
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
                throw new CustomError(error);
            }
        },
        deleteActor: async (id: idType): Promise<Actor> => {
            try {
                const deletedActor = await actorModel.findByIdAndDelete(id);
                return deletedActor;
            } catch (error) {
                throw new CustomError(error);
            }
        },
    };
};
export default ActorAdapter;
