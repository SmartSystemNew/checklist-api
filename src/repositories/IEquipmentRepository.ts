import { IListByBranch } from '@/models/IEquipment'
import { cadastro_de_equipamentos } from '@prisma/client'

export default interface IEquipmentRepository {
  listByBranch(branch: number[]): Promise<IListByBranch[]>
  findById(id: number): Promise<cadastro_de_equipamentos | null>
}
