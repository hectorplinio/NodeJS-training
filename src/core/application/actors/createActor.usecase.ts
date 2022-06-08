import { Actor } from "../../domain/actor";
import ActorRepository from "../../repositories/actor.repository";

const CreateActor = async (repository: ActorRepository, actor: Actor) => {
    return await repository.createActor(actor);
};
export default CreateActor;
