import { prisma } from '@/lib/prisma'
import { IListRegisterByTime } from '@/models/IProductionRegister'
import IProductionRegisterRepository from '../IProductionRegisterRepository'
import { Decimal } from '@prisma/client/runtime'
import { Prisma, smartnewsystem_registro_producao } from '@prisma/client'

export default class ProductionRegisterRepository
  implements IProductionRegisterRepository
{
  private table = prisma.smartnewsystem_registro_producao

  async listRegisterByTime(
    time: Date,
    branch: number[],
  ): Promise<IListRegisterByTime[]> {
    const register = await this.table.findMany({
      select: {
        id: true,
        DATA: true,
        turno: true,
        status: true,
        equipment: {
          select: {
            equipamento_codigo: true,
            descricao: true,
          },
        },
      },
      where: {
        data_hora_inicio: {
          gte: time,
        },
        equipment: {
          ID_filial: {
            in: branch,
          },
        },
      },
    })

    return register
  }

  async findLastMileageByEquipment(
    equipmentId: number,
  ): Promise<number | Decimal> {
    const mileage = await this.table.findFirst({
      select: {
        quilometragem_final: true,
      },
      where: {
        id_equipamento: equipmentId,
      },
      orderBy: {
        id: 'desc',
      },
    })

    return mileage?.quilometragem_final || 0
  }

  async save(
    data: Prisma.smartnewsystem_registro_producaoUncheckedCreateInput,
  ): Promise<smartnewsystem_registro_producao> {
    const register = await this.table.create({
      data,
    })

    return register
  }
}
