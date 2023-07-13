import { IByClient } from '@/models/IPeriod'

export default interface IPeriodRepository {
  byClient(clientId: number): Promise<IByClient[]>
}
