import { FastifyRequest, FastifyReply } from 'fastify'
import IController from '../../../models/IController'
import IUseCase from '../../../models/IUseCase'
import IPutCheckListPeriodRequestDTO from './IPutCheckListPeriodRequestDTO'
import { z } from 'zod'
import { HttpStatusCode } from '@/config/CustomError'

export default class PutChecKListPeriodController implements IController {
  constructor(private useCase: IUseCase) {
    this.handle = this.handle.bind(this)
  }

  async handle(req: FastifyRequest, res: FastifyReply) {
    const bodySchema = z.object({
      checkListPeriodId: z.coerce.number(),
      statusId: z.coerce.number(),
    })

    const request: IPutCheckListPeriodRequestDTO = {
      user: req.user,
      ...bodySchema.parse(req.body),
    }

    const response = await this.useCase.execute(request)

    res.status(HttpStatusCode.OK).send(response)
  }
}
