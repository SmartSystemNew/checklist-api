export interface IInfo {
  id: number
  taskId: number
  statusId: number
  controlId: number | null
  description: string
  impeding: boolean
  logUser: string
  logDate: Date
}
