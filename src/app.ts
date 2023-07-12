import fastify from 'fastify'
import routes from './routes'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'
import { HTTPStatus } from './config/httpStatus'

export const app = fastify({
  logger: true,
})

app.register(fastifyJwt, {
  secret: env.KEY,
  // sign: {
  //   expiresIn: env.NODE_ENV === 'dev' ? '2m' : '3d',
  // },
})

app.get('/', (req, res) => res.status(HTTPStatus.NO_CONTENT).send(''))

app.register(routes)
