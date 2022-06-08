import ActorAdapter from "../../../infraestructure/adapters/actors.adapter";
import { Actor } from "../../domain/actor";
import CreateActorUseCase from "./createActor.usecase";
import GetAllActorsUseCase from "./getAllActors.usecase";
import GetActorByIdUseCase from "./getActorById.usecase";
import DeleteActorUseCase from "./deleteActor.usecase";
import UpdateActorUseCase from "./updateActor.usecase";
import { idType } from "../../domain/id.type";
const actorRepository = ActorAdapter();

export const getAllActors = () => GetAllActorsUseCase(actorRepository);
export const getActorById = (id: idType) =>
    GetActorByIdUseCase(actorRepository, id);
export const createActor = (actor: Actor) =>
    CreateActorUseCase(actorRepository, actor);
export const deleteActor = (id: idType) =>
    DeleteActorUseCase(actorRepository, id);
export const updateActor = (id: idType, actor: Actor) =>
    UpdateActorUseCase(actorRepository, id, actor);
