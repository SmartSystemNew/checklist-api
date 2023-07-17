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
  }
}
