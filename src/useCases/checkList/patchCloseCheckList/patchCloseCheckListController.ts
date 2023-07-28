import { FastifyRequest, FastifyReply } from 'fastify'
import IController from '../../../models/IController'
import IUseCase from '../../../models/IUseCase'
import IPatchCloseCheckListRequestDTO from './IPatchCloseCheckListRequestDTO'
import { z } from 'zod'
import IPatchCloseCheckListResponseDTO from './IPatchCloseCheckListResponseDTO'
import { HttpStatusCode } from '@/config/CustomError'

export default class PatchCloseCheckListController implements IController {
  constructor(private useCase: IUseCase) {
    this.handle = this.handle.bind(this)
  }

  async handle(req: FastifyRequest, res: FastifyReply) {
    const bodySchema = z.object({
      productionRegisterId: z.coerce.number(),
    })

    const request: IPatchCloseCheckListRequestDTO = {
      user: req.user,
      ...bodySchema.parse(req.body),
    }

    const response: IPatchCloseCheckListResponseDTO =
      await this.useCase.execute(request)

    res.status(HttpStatusCode.OK).send(response)
  }
}
