import { prisma } from '@/lib/prisma'
import IPeriodRepository from '../IPeriodRepository'
import { IByClient } from '@/models/IPeriod'

export default class PeriodRepository implements IPeriodRepository {
  private table = prisma.smartnewsystem_registro_turno

  async byClient(clientId: number): Promise<IByClient[]> {
    return await this.table.findMany({
      where: {
        id_cliente: clientId,
      },
    })
  }
}
