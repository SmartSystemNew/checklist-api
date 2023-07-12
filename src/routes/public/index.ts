import { FastifyInstance } from 'fastify'
import loginRoutes from './login'

export default async function publicRoutes(app: FastifyInstance) {
  app.register(loginRoutes, {
    prefix: '/login',
  })
}
