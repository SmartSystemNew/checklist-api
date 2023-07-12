import { FastifyRequest, FastifyReply } from 'fastify'
import IController from '../../../models/IController'
import IUseCase from '../../../models/IUseCase'
import { z } from 'zod'

export default class GetCheckListByLimitTimeController implements IController {
  constructor(private useCase: IUseCase) {
    this.handle = this.handle.bind(this)
  }

  async handle(req: FastifyRequest, res: FastifyReply) {
    const queryParams = z.object({
      time: z.coerce.number(),
    })

    const { time } = queryParams.parse(req.query)

    const response = await this.useCase.execute({ time, user: req.user })

    res.status(200).send(response)
  }
}
