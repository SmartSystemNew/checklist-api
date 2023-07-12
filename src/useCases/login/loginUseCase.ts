import IUseCase from '../../models/IUseCase'
import IUserRepository from '../../repositories/IUserRepository'
import ILoginRequestDTO from './ILoginRequestDTO'

export default class LoginUseCase implements IUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ILoginRequestDTO) {
    const user = await this.userRepository.findByLogin(data.login)

    if (!user) {
      return {
        message: 'User not found',
      }
    }

    return {
      user,
    }
  }
}
