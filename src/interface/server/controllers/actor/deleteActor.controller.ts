import { Actor } from "../../../../core/domain/actor";
import { deleteActor } from "../../../../core/application/actors/index";
const deleteActorController = async (req, res) => {
    const id = req.body.id;
    const actor: Actor = await deleteActor(id);
    if (!actor.name) return res.status(400).send({ message: actor });
    return res.status(200).send({ message: "Actor deleted", actor: actor });
};
export default deleteActorController;
