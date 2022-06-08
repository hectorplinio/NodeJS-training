import { idType } from "../../domain/id.type";
import ActorRepository from "../../repositories/actor.repository";
import { Actor } from "../../domain/actor";
const UpdateActor = (repository: ActorRepository, id: idType, actor: Actor) => {
    return repository.updateActor(id, actor);
};
export default UpdateActor;
