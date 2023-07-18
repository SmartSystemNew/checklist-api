import { FastifyInstance } from 'fastify'
import getCheckListByLimitTime from '@/useCases/checkList/getCheckListByLimitTime'
import postCheckList from '@/useCases/checkList/postCheckList'
import getCheckListByFamily from '@/useCases/checkListTask/getCheckListTaskByFamily'
import getCheckListTask from '@/useCases/checkListTask/getCheckListTask'

export default async function checkListRoutes(checkList: FastifyInstance) {
  checkList.get('/byLimitTime', getCheckListByLimitTime.handle)
  checkList.post('/', postCheckList.handle)
  checkList.get('/taskByFamily', getCheckListByFamily.handle)
  checkList.get('/task', getCheckListTask.handle)
}
