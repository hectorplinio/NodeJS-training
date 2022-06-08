import arrayExceptions from "../../../../infraestructure/tools/trim-fields/array-exceptions";
import trimFields from "../../../../infraestructure/tools/trim-fields/trim-fields";
import { Actor } from "../../../../core/domain/actor";
import { updateActor } from "../../../../core/application/actors/index";
const updateActorController = async (req, res) => {
    const actor: Actor = trimFields(req.body, arrayExceptions);
    const newActor = await updateActor(actor.id, actor);
    if (!newActor.name) return res.status(400).send({ message: newActor });
    return res.status(200).send({ actor: newActor });
};
export default updateActorController;
