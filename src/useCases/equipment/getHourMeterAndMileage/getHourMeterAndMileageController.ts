import { FastifyRequest, FastifyReply } from 'fastify'
import IController from '../../../models/IController'
import IUseCase from '../../../models/IUseCase'
import IGetHourMeterAndMileageRequestDTO from './IGetHourMeterAndMileageRequestDTO'
import { HttpStatusCode } from '@/config/CustomError'
import { z } from 'zod'

export default class GetHourMeterAndMileageController implements IController {
  constructor(private useCase: IUseCase) {
    this.handle = this.handle.bind(this)
  }

  async handle(req: FastifyRequest, res: FastifyReply) {
    const queryParams = z.object({
      id: z.coerce.number(),
    })

    const { id: equipmentId } = queryParams.parse(req.params)

    const request: IGetHourMeterAndMileageRequestDTO = {
      user: req.user,
      equipmentId,
    }

    const response = await this.useCase.execute(request)

    res.status(HttpStatusCode.OK).send(response)
  }
}
