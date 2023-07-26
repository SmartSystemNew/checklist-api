import { Prisma, smartnewsystem_registro_equipamento } from '@prisma/client'

export default interface IEquipmentRegisterRepository {
  create(
    data: Prisma.smartnewsystem_registro_equipamentoUncheckedCreateInput,
  ): Promise<smartnewsystem_registro_equipamento>

  findByEquipment(
    equipmentId: number,
  ): Promise<smartnewsystem_registro_equipamento | null>
}
