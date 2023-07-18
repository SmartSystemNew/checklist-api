import { IFindTaskByFamily } from '@/models/ICheckListItem'

export default interface ICheckListItemRepository {
  findTaskByFamily(familyId: number): Promise<IFindTaskByFamily[]>
}
