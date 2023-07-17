import { FastifyInstance } from 'fastify'
import getCheckListByLimitTime from '@/useCases/checkList/getCheckListByLimitTime'
import postCheckList from '@/useCases/checkList/postCheckList'

export default async function checkListRoutes(checkList: FastifyInstance) {
  checkList.get('/byLimitTime', getCheckListByLimitTime.handle)
  checkList.post('/', postCheckList.handle)
}
