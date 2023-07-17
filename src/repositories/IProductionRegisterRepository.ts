import { IListRegisterByTime } from '@/models/IProductionRegister'
import { Prisma, smartnewsystem_registro_producao } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime'

export default interface IProductionRegisterRepository {
  listRegisterByBranch(branch: number[]): Promise<IListRegisterByTime[]>
  listRegisterByTime(
    time: Date,
    branch: number[],
    login: string,
  ): Promise<IListRegisterByTime[]>
  findLastMileageByEquipment(equipmentId: number): Promise<number | Decimal>
  save(
    data: Prisma.smartnewsystem_registro_producaoUncheckedCreateInput,
  ): Promise<smartnewsystem_registro_producao>
}
