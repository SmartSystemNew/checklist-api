import { app } from './app'
import { env } from './env'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`Serving is running in ${env.URL}`)
  })
  .catch((err) => {
    console.error(err)
  })
