import UserRepository from '../../repositories/implementations/UserRepository'
import LoginController from './loginController'
import LoginUseCase from './loginUseCase'

const userRepository = new UserRepository()

const useCase = new LoginUseCase(userRepository)

const controller = new LoginController(useCase)

export default controller
