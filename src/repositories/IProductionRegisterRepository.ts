import { IListRegisterByTime } from '@/models/IProductionRegister'

export default interface IProductionRegisterRepository {
  listRegisterByTime(
    time: Date,
    branch: number[],
  ): Promise<IListRegisterByTime[]>
}
