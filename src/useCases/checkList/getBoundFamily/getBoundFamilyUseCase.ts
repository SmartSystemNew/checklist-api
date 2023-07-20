import IUseCase from '@/models/IUseCase'
import ICheckListRepository from '@/repositories/ICheckListRepository'
import IGetBoundFamilyRequestDTO from './IGetBoundFamilyRequestDTO'

export default class GetBoundFamilyUseCase implements IUseCase {
  constructor(private checkListRepository: ICheckListRepository) {}

  async execute(data: IGetBoundFamilyRequestDTO) {
    const allCheckList = await this.checkListRepository.findByClient(
      data.user.id_cliente,
    )

    return {
      checkList: allCheckList,
    }
  }
}
