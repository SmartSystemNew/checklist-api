import { FastifyRequest, FastifyReply } from 'fastify'
import IController from '../../../models/IController'
import IUseCase from '../../../models/IUseCase'
import { HttpStatusCode } from '@/config/CustomError'
import IGetStatusActionRequestDTO from './IGetStatusActionRequestDTO'
import { z } from 'zod'

export default class GetStatusActionController implements IController {
  constructor(private useCase: IUseCase) {
    this.handle = this.handle.bind(this)
  }

  async handle(req: FastifyRequest, res: FastifyReply) {
    const querySchema = z.object({
      taskId: z.coerce.number(),
      statusId: z.coerce.number(),
    })

    const request: IGetStatusActionRequestDTO = {
      user: req.user,
      ...querySchema.parse(req.query),
    }

    const response = await this.useCase.execute(request)

    res.status(HttpStatusCode.OK).send(response)
  }
}
