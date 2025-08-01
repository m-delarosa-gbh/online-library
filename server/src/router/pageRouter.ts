import { Router } from "express";
import { PageController } from "../controller";

const pageRouter = Router();

pageRouter.get('/:id/page/:page_number', PageController.findPage)

export default pageRouter;