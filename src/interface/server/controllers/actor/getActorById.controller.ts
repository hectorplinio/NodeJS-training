import { Actor } from "../../../../core/domain/actor";
import { getActorById } from "../../../../core/application/actors/index";
const getActorByIdController = async (req, res) => {
    const id = req.query.id;
    const actor: Actor = await getActorById(id);
    return res.status(200).send({ actor: actor });
};
export default getActorByIdController;
