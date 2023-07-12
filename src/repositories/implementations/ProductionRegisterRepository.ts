import { prisma } from '@/lib/prisma'
import { IListRegisterByTime } from '@/models/IProductionRegister'
import IProductionRegisterRepository from '../IProductionRegisterRepository'

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
}
