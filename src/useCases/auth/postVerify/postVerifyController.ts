import { FastifyRequest, FastifyReply } from 'fastify'
import IController from '../../../models/IController'

export default class PostVerifyController implements IController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    try {
      await req.jwtVerify()

      return res.status(200).send({
        message: 'User authenticated',
        verify: true,
      })
    } catch (error) {
      res.status(401).send({
        message: 'Token verification failed',
        verify: false,
      })
    }
  }
}
