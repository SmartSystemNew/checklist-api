import { FastifyRequest, FastifyReply } from 'fastify'

export default interface IController {
  handle(req: FastifyRequest, res: FastifyReply): any
}
