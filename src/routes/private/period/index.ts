import { FastifyInstance } from 'fastify'
import getPeriod from '@/useCases/period/getPeriod'

export default async function periodRoutes(period: FastifyInstance) {
  period.get('/byClient', getPeriod.handle)
}
