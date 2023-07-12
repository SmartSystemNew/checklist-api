import { FastifyInstance } from 'fastify'
import getCheckListByLimitTime from '@/useCases/checkList/getCheckListByLimitTime'

export default async function checkListRoutes(checkList: FastifyInstance) {
  checkList.get('/byLimitTime', getCheckListByLimitTime.handle)
}
