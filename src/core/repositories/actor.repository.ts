import { Actor } from "../domain/actor";
import { idType } from "../domain/id.type";

export default interface ActorRepository {
    getAllActors(): Promise<Actor[]>;
    getActorById(id: idType): Promise<Actor>;
    createActor(actor: Actor): Promise<Actor>;
    updateActor(id: idType, actor: Actor): Promise<Actor>;
    deleteActor(id: idType): Promise<Actor>;
}
