import { prisma } from '@/lib/prisma'
import IEquipmentRepository from '../IEquipmentRepository'
import { IListByBranch } from '@/models/IEquipment'

export default class EquipmentRepository implements IEquipmentRepository {
  private table = prisma.cadastro_de_equipamentos

  async listByBranch(branch: number[]): Promise<IListByBranch[]> {
    return await this.table.findMany({
      select: {
        ID: true,
        equipamento_codigo: true,
        descricao: true,
      },
      where: {
        ID_filial: {
          in: branch,
        },
      },
    })
  }
}
