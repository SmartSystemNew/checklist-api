import { FastifyInstance } from 'fastify'
import getCheckListByLimitTime from '@/useCases/checkList/getCheckListByLimitTime'
import postCheckList from '@/useCases/checkList/postCheckList'
import getCheckListByFamily from '@/useCases/checkListTask/getCheckListTaskByFamily'
import getCheckListTask from '@/useCases/checkListTask/getCheckListTask'
import getInfo from '@/useCases/checkList/getInfo'
import getBoundFamily from '@/useCases/checkList/getBoundFamily'

export default async function checkListRoutes(checkList: FastifyInstance) {
  checkList.get('/byLimitTime', getCheckListByLimitTime.handle)
  checkList.post('/', postCheckList.handle)
  checkList.get('/taskByFamily', getCheckListByFamily.handle)
  checkList.get('/task', getCheckListTask.handle)
  checkList.get('/info', getInfo.handle)
  checkList.get('/boundFamily', getBoundFamily.handle)
}
