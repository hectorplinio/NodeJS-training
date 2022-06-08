import { idType } from "../../domain/id.type";
import ActorRepository from "../../repositories/actor.repository";
const GetActorById = async (repository: ActorRepository, id: idType) => {
    return await repository.getActorById(id);
};
export default GetActorById;
