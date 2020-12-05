import { Router } from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.route('/users')
  .get(UserController.index)
  .post(UserController.store)

export default routes
