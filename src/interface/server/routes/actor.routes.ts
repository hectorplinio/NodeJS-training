import express, { Router } from "express";
import { controllerWrapper } from "../wrappers/controller.wrapper";
import createActorController from "../controllers/actor/createActor.controller";

const router: Router = express.Router();
const actorRouter = (): Router => {
    router.post("/", controllerWrapper(createActorController));
    return router;
};
export default actorRouter;
