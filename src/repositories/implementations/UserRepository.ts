import { prisma } from '../../lib/prisma'
import IUserRepository from '../IUserRepository'
import { IFindByLogin } from '../../models/IUser'

export default class UserRepository implements IUserRepository {
  private table = prisma.sec_users

  async findByLogin(login: string): Promise<IFindByLogin | null> {
    return await this.table.findFirst({
      select: {
        login: true,
        pswd: true,
        new_pswd: true,
        name: true,
        id_cliente: true,
      },
      where: {
        login,
      },
    })
  }
}
