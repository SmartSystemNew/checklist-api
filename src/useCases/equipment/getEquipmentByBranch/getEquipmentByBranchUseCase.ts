import IUseCase from '@/models/IUseCase'
import IGetEquipmentByBranchRequestDTO from './IGetEquipmentByBranchRequestDTO'
import IEquipmentRepository from '@/repositories/IEquipmentRepository'
import IGetEquipmentByBranchResponseDTO from './IGetEquipmentByBranchResponseDTO'
export default class GetEquipmentByBranchUseCase implements IUseCase {
  constructor(private equipmentRepository: IEquipmentRepository) {}

  async execute(data: IGetEquipmentByBranchRequestDTO) {
    const allEquipment = await this.equipmentRepository.listByBranch(
      data.user.branchBound.map((item) => item.branch.ID),
    )

    const response: IGetEquipmentByBranchResponseDTO[] = allEquipment.map(
      (item) => {
        return {
          id: item.ID,
          code: item.equipamento_codigo || '',
          description: item.descricao || '',
          costCenterId: item.id_centro_custo || 0,
          clientId: item.ID_cliente || 0,
          branchId: item.ID_filial || 0,
        }
      },
    )

    return response
  }
}
