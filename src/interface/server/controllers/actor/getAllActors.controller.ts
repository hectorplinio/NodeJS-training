import { Actor } from "../../../../core/domain/actor";
import { getAllActors } from "../../../../core/application/actors/index";
const getAllActorsController = async (_req, res) => {
    const actors: Array<Actor> = await getAllActors();
    if (actors.length === 0)
        return res.status(400).send({ message: "No Actors found" });
    return res.status(200).send({ actors: actors });
};
export default getAllActorsController;
