import { prisma } from '@/lib/prisma'
import IEquipmentRepository from '../IEquipmentRepository'
import { IListByBranch } from '@/models/IEquipment'
import { cadastro_de_equipamentos } from '@prisma/client'

export default class EquipmentRepository implements IEquipmentRepository {
  private table = prisma.cadastro_de_equipamentos

  async listByBranch(branch: number[]): Promise<IListByBranch[]> {
    return await this.table.findMany({
      select: {
        ID: true,
        equipamento_codigo: true,
        descricao: true,
        ID_cliente: true,
        ID_filial: true,
        id_centro_custo: true,
      },
      where: {
        ID_filial: {
          in: branch,
        },
      },
    })
  }

  async findById(id: number): Promise<cadastro_de_equipamentos | null> {
    return await this.table.findUnique({
      where: {
        ID: id,
      },
    })
  }
}