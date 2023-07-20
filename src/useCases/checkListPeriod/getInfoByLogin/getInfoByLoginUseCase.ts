import IUseCase from '@/models/IUseCase'
import ICheckListPeriodRepository from '@/repositories/ICheckListPeriodRepository'
import IGetInfoByLoginRequestDTO from './IGetInfoByLoginRequestDTO'

export default class GetInfoByLoginUseCase implements IUseCase {
  constructor(private checkListPeriodRepository: ICheckListPeriodRepository) {}

  async execute(data: IGetInfoByLoginRequestDTO) {
    const allCheckListPeriod = await this.checkListPeriodRepository.infoByLogin(
      data.user.login,
    )

    return {
      checkListPeriod: allCheckListPeriod,
    }
  }
}
