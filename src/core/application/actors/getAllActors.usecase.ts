import ActorRepository from "../../repositories/actor.repository";
const GetAllActors = async (repository: ActorRepository) => {
    return await repository.getAllActors();
};
export default GetAllActors;
