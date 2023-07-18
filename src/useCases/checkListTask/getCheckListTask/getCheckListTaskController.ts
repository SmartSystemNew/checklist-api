import { FastifyRequest, FastifyReply } from 'fastify'
import IController from '../../../models/IController'
import IUseCase from '../../../models/IUseCase'
import IGetCheckListTaskRequestDTO from './IGetCheckListTaskRequestDTO'

export default class GetCheckListTaskController implements IController {
  constructor(private useCase: IUseCase) {
    this.handle = this.handle.bind(this)
  }

  async handle(req: FastifyRequest, res: FastifyReply) {
    const request: IGetCheckListTaskRequestDTO = {
      user: req.user,
    }

    const response = await this.useCase.execute(request)

    res.status(200).send(response)
  }
}
