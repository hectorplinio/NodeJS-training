import trimFields from "../../../../infraestructure/tools/trim-fields/trim-fields";
import arrayExceptions from "../../../../infraestructure/tools/trim-fields/array-exceptions";
import { Actor } from "../../../../core/domain/actor";
import { createActor } from "../../../../core/application/actors/index";

const createActorController = async (req, res) => {
    const actor: Actor = trimFields(req.body, arrayExceptions);
    const newActor = await createActor(actor);
    return res.status(200).send({ actor: newActor });
};
export default createActorController;
