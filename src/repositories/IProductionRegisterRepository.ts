import { IListRegisterByTime } from '@/models/IProductionRegister'
import { Decimal } from '@prisma/client/runtime'

export default interface IProductionRegisterRepository {
  listRegisterByTime(
    time: Date,
    branch: number[],
  ): Promise<IListRegisterByTime[]>

  findLastMileageByEquipment(equipmentId: number): Promise<number | Decimal>
}
