import IUseCase from '@/models/IUseCase'
import IGetInfoRequestDTO from './IGetInfoRequestDTO'
import IProductionRegisterRepository from '@/repositories/IProductionRegisterRepository'
import dayjs from 'dayjs'
import IGetInfoResponseDTO from './IGetInfoResponseDTO'

export default class GetInfoUseCase implements IUseCase {
  constructor(
    private productionRegisterRepository: IProductionRegisterRepository,
  ) {}

  async execute(data: IGetInfoRequestDTO) {
    const dateStatic = dayjs('2022-02-01')
    const register = await this.productionRegisterRepository.listRegisterByTime(
      dateStatic.toDate(),
      data.user.branchBound.map((item) => item.branch.ID),
      data.user.login,
    )

    const response: IGetInfoResponseDTO[] = register.map((item) => {
      return {
        id: item.id,
        id_centro_custo: item.id_centro_custo || 0,
        id_equipamento: item.equipment?.ID || 0,
        id_turno: item.id_turno,
        DATA: item.DATA,
        data_hora_encerramento: item.data_hora_encerramento,
        data_hora_inicio: item.data_hora_inicio,
        status: item.status,
        data_log: item.data_log,
        login: item.login || '',
        quilometragem: item.quilometragem,
        quilometragem_final: item.quilometragem_final,
        turno: item.turno,
      }
    })

    return response
  }
}
