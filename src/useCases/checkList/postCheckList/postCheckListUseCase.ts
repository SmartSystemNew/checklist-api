import IUseCase from '@/models/IUseCase'
import IProductionRegisterRepository from '@/repositories/IProductionRegisterRepository'
import IPostCheckListRequestDTO from './IPostCheckListRequestDTO'
import IEquipmentRepository from '@/repositories/IEquipmentRepository'
import IPeriodRepository from '@/repositories/IPeriodRepository'
import CustomError from '@/config/CustomError'

export default class PostCheckListUseCase implements IUseCase {
  constructor(
    private productionRegisterRepository: IProductionRegisterRepository,
    private equipmentRepository: IEquipmentRepository,
    private periodRepository: IPeriodRepository,
  ) {}

  async execute(data: IPostCheckListRequestDTO) {
    const equipment = await this.equipmentRepository.findById(data.equipmentId)

    if (!equipment) {
      throw CustomError.notFound('Equipamento não encontrado!')
    }

    const period = await this.periodRepository.findById(data.periodId)

    if (!period) {
      throw CustomError.notFound('Período não encontrado!')
    }

    const productionRegister = await this.productionRegisterRepository.save({
      id_centro_custo: Number(equipment.centro_custo) || 0,
      id_equipamento: equipment.ID,
      id_turno: period.id,
      quilometragem: data.mileage,
      login: data.user.login,
      DATA: data.initialTime,
      data_hora_inicio: data.initialTime,
      // turno: period.turno || 'Turno_1',
      idlog: 0,
    })

    return {
      id: productionRegister.id,
    }
  }
}
