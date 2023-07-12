import { FastifyInstance } from 'fastify'
import postVerify from '../../../useCases/auth/postVerify'

export default async function authRoutes(auth: FastifyInstance) {
  auth.post('/', postVerify.handle)
}
