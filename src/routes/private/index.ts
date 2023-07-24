import { FastifyInstance } from 'fastify'
import authRoutes from './auth'
import verifyJWT from '@/middleware/verifyJWT'
import checkListRoutes from './checkList'
import periodRoutes from './period'
import equipmentRoutes from './equipment'
import checkListPeriodRoutes from './checkListPeriod'

export default async function privateRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.register(authRoutes, {
    prefix: '/auth',
  })
  app.register(checkListRoutes, {
    prefix: '/checkList',
  })
  app.register(periodRoutes, {
    prefix: '/period',
  })
  app.register(equipmentRoutes, {
    prefix: '/equipment',
  })
  app.register(checkListPeriodRoutes, {
    prefix: '/checkListPeriod',
  })
}
