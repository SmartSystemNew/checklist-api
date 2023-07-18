import IUseCase from '@/models/IUseCase'
import IGetEquipmentByBranchRequestDTO from './IGetEquipmentByBranchRequestDTO'
import IEquipmentRepository from '@/repositories/IEquipmentRepository'
import IGetEquipmentByBranchResponseDTO from './IGetEquipmentByBranchResponseDTO'
import IProductionRegisterRepository from '@/repositories/IProductionRegisterRepository'
import IProductionRegisterDataRepository from '@/repositories/IProductionRegisterDataRepository'
export default class GetEquipmentByBranchUseCase implements IUseCase {
  constructor(
    private equipmentRepository: IEquipmentRepository,
    private productionRegisterRepository: IProductionRegisterRepository,
    private productionRegisterDataRepository: IProductionRegisterDataRepository,
  ) {}

  async execute(data: IGetEquipmentByBranchRequestDTO) {
    const allEquipment = await this.equipmentRepository.listByBranch(
      data.user.branchBound.map((item) => item.branch.ID),
    )

    const response: IGetEquipmentByBranchResponseDTO[] = []

    for await (const item of allEquipment) {
      const mileage =
        await this.productionRegisterRepository.findLastMileageByEquipment(
          item.ID,
        )

      const hourMeter =
        await this.productionRegisterDataRepository.findLastHourMeterByEquipment(
          item.ID,
        )

      response.push({
        id: item.ID,
        code: item.equipamento_codigo || '',
        description: item.descricao || '',
        costCenter: item.id_centro_custo || 0,
        clientId: item.ID_cliente || 0,
        branchId: item.ID_filial || 0,
        mileage: Number(mileage),
        familyId: item.ID_familia || 0,
        hourMeter: Number(hourMeter),
      })
    }

    return response
  }
}
