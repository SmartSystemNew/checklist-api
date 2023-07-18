import { prisma } from '@/lib/prisma'
import { IFindTaskByFamily } from '@/models/ICheckListItem'
import ICheckListItemRepository from '../ICheckListItemRepository'

export default class CheckListItemRepository
  implements ICheckListItemRepository
{
  private table = prisma.smartnewsystem_producao_checklist_itens

  async findTaskByFamily(familyId: number): Promise<IFindTaskByFamily[]> {
    return await this.table.findMany({
      select: {
        checkListTask: {
          select: {
            id: true,
            descricao: true,
          },
        },
      },
      where: {
        checkList: {
          id_familia: familyId,
        },
      },
    })
  }
}
