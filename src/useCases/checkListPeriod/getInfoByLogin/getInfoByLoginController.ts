import { FastifyRequest, FastifyReply } from 'fastify'
import IController from '../../../models/IController'
import IUseCase from '../../../models/IUseCase'
import IGetInfoByLoginRequestDTO from './IGetInfoByLoginRequestDTO'
import { HttpStatusCode } from '@/config/CustomError'

export default class GetInfoByLoginController implements IController {
  constructor(private useCase: IUseCase) {
    this.handle = this.handle.bind(this)
  }

  async handle(req: FastifyRequest, res: FastifyReply) {
    const request: IGetInfoByLoginRequestDTO = {
      user: req.user,
    }

    const response = await this.useCase.execute(request)

    res.status(HttpStatusCode.OK).send(response)
  }
}
