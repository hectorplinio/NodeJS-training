import trimFields from "../../../../infraestructure/tools/trim-fields/trim-fields";
import arrayExceptions from "../../../../infraestructure/tools/trim-fields/array-exceptions";
import { Actor } from "../../../../core/domain/actor";
import { createActor } from "../../../../core/application/actors/index";

const createActorController = async (req, res) => {
    const actor: Actor = trimFields(req.body, arrayExceptions);
    const newActor = await createActor(actor);
    if (!newActor.name) return res.status(400).send({ message: newActor });
    return res.status(200).send({ film: newActor });
};
export default createActorController;
