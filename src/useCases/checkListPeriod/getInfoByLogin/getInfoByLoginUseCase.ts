import IUseCase from '@/models/IUseCase'
import ICheckListPeriodRepository from '@/repositories/ICheckListPeriodRepository'
import IGetInfoByLoginRequestDTO from './IGetInfoByLoginRequestDTO'
import IGetInfoByLoginResponseDTO from './IGetInfoByLoginResponseDTO'

export default class GetInfoByLoginUseCase implements IUseCase {
  constructor(private checkListPeriodRepository: ICheckListPeriodRepository) {}

  async execute(data: IGetInfoByLoginRequestDTO) {
    const allCheckListPeriod = await this.checkListPeriodRepository.infoByLogin(
      data.user.login,
    )

    const response: IGetInfoByLoginResponseDTO[] = allCheckListPeriod.map(
      (item) => {
        return {
          id: item.id,
          branchId: item.id_filial || 0,
          productionRegisterId: item.id_registro_producao || 0,
          checkListItemId: item.id_item_checklist || 0,
          statusItem: item.status_item,
          logDate: item.log_date,
        }
      },
    )

    return {
      checkListPeriod: response,
    }
  }
}
