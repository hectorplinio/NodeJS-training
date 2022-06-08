import express, { Router } from "express";
import { controllerWrapper } from "../wrappers/controller.wrapper";
import createActorController from "../controllers/actor/createActor.controller";
import getAllActorsController from "../controllers/actor/getAllActors.controller";
import getActorByIdController from "../controllers/actor/getActorById.controller";
import deleteActorController from "../controllers/actor/deleteActor.controller";
import updateActorController from "../controllers/actor/updateActor.controller";

const router: Router = express.Router();
const actorRouter = (): Router => {
    router.get("/", controllerWrapper(getAllActorsController));
    router.post("/", controllerWrapper(createActorController));
    router.get("/?id", controllerWrapper(getActorByIdController));
    router.delete("/", controllerWrapper(deleteActorController));
    router.put("/", controllerWrapper(updateActorController));
    return router;
};
export default actorRouter;
