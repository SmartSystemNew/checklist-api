import { FastifyRequest, FastifyReply } from 'fastify'
import IController from '../../../models/IController'
import IUseCase from '../../../models/IUseCase'
import { z } from 'zod'
import IGetCheckListTaskByFamilyRequestDTO from './IGetCheckListTaskByFamilyRequestDTO'
import { HttpStatusCode } from '@/config/CustomError'

export default class GetCheckListTaskByFamilyController implements IController {
  constructor(private useCase: IUseCase) {
    this.handle = this.handle.bind(this)
  }

  async handle(req: FastifyRequest, res: FastifyReply) {
    const queryParams = z.object({
      familyId: z.coerce.number(),
      equipmentId: z.coerce.number().optional(),
    })

    const request: IGetCheckListTaskByFamilyRequestDTO = {
      user: req.user,
      ...queryParams.parse(req.query),
    }

    const response = await this.useCase.execute(request)

    res.status(HttpStatusCode.OK).send(response)
  }
}
