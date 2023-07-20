import { IInfoByLogin } from '@/models/ICheckListPeriod'

export default interface ICheckListPeriodRepository {
  infoByLogin(login: string): Promise<IInfoByLogin[]>
}
