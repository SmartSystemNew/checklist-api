import { FastifyRequest, FastifyReply } from 'fastify'
import IController from '../../../models/IController'
import IUseCase from '../../../models/IUseCase'
import IGetPeriodByBranchRequestDTO from './IGetPeriodByBranchRequestDTO'
import { z } from 'zod'

export default class GetPeriodByBranchController implements IController {
  constructor(private useCase: IUseCase) {
    this.handle = this.handle.bind(this)
  }

  async handle(req: FastifyRequest, res: FastifyReply) {
    const querySchema = z.object({
      branchId: z.coerce.number(),
    })

    const request: IGetPeriodByBranchRequestDTO = {
      user: req.user,
      ...querySchema.parse(req.query),
    }

    const response = await this.useCase.execute(request)

    res.status(200).send(response)
  }
}
