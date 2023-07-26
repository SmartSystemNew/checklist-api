import { FastifyInstance } from 'fastify'
import loginController from '../../../useCases/login'

export default async function loginRoutes(login: FastifyInstance) {
  login.post('/', loginController.handle)
}
