import { prisma } from '@/lib/prisma'
import IProductionRegisterDataRepository from '../IProductionRegisterDataRepository'
import { Decimal } from '@prisma/client/runtime/library'

export default class ProductionRegisterDataRepository
  implements IProductionRegisterDataRepository
{
  private table = prisma.smartnewsystem_registro_producao_dados

  async findLastHourMeterByEquipment(
    equipmentId: number,
  ): Promise<number | Decimal> {
    const hourMeter = await this.table.findFirst({
      select: {
        horimetro_final: true,
      },
      where: {
        productionRegister: {
          id_equipamento: equipmentId,
        },
      },
      orderBy: {
        id: 'desc',
      },
    })

    return hourMeter?.horimetro_final || 0
  }
}
