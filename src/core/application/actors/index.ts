import ActorAdapter from "../../../infraestructure/adapters/actors.adapter";
import { Actor } from "../../domain/actor";
import CreateActorUseCase from "./createActor.usecase";
const actorRepository = ActorAdapter();

export const createActor = (actor: Actor) =>
    CreateActorUseCase(actorRepository, actor);
