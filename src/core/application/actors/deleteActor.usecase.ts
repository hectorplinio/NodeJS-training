import { idType } from "../../domain/id.type";
import ActorRepository from "../../repositories/actor.repository";
const DeleteActor = async (repository: ActorRepository, id: idType) => {
    return await repository.deleteActor(id);
};
export default DeleteActor;
