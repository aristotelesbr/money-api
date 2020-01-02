import { Router } from "express";

import ApplicationController from "../src/app/ApplicationController";

const routes = new Router();

routes.get("/", ApplicationController.index);

export default routes;
