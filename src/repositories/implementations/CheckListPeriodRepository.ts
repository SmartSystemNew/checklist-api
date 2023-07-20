import { prisma } from '@/lib/prisma'
import { IInfoByLogin } from '@/models/ICheckListPeriod'
import ICheckListPeriodRepository from '../ICheckListPeriodRepository'

export default class CheckListPeriodRepository
  implements ICheckListPeriodRepository
{
  private table = prisma.smartnewsystem_producao_checklist_turno

  async infoByLogin(login: string): Promise<IInfoByLogin[]> {
    return await this.table.findMany({
      select: {
        id: true,
        id_filial: true,
        id_registro_producao: true,
        id_item_checklist: true,
        status_item: true,
        log_date: true,
      },
      where: {
        productionRegister: {
          login,
        },
      },
    })
  }
}
