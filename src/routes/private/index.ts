import { FastifyInstance } from 'fastify'
import authRoutes from './auth'
import verifyJWT from '@/middleware/verifyJWT'
import checkListRoutes from './checkList'

export default async function privateRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.register(authRoutes, {
    prefix: '/auth',
  })
  app.register(checkListRoutes, {
    prefix: '/checkList',
  })
}
