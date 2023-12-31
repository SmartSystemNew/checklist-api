import { Decimal } from '@prisma/client/runtime'

export default interface IProductionRegisterDataRepository {
  findLastHourMeterByEquipment(equipmentId: number): Promise<number | Decimal>
}
