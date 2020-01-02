import { Router } from 'express';

import ApplicationController from './app/ApplicationController';

const routes = new Router();

routes.get('/', ApplicationController.index);

export default routes;
