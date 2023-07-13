import { IListByBranch } from '@/models/IEquipment'

export default interface IEquipmentRepository {
  listByBranch(branch: number[]): Promise<IListByBranch[]>
}
