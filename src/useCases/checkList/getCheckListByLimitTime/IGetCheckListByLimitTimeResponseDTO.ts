export default interface IGetCheckListByLimitTimeResponseDTO {
  id: number
  date: string
  period: string
  status: 'open' | 'close'
  code: string
  description: string
}
