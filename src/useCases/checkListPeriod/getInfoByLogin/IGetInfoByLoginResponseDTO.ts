export default interface IGetInfoByLoginResponseDTO {
  id: number
  branchId: number
  productionRegisterId: number
  checkListItemId: number
  statusItem: number | null
  statusNC: number | null
  logDate: Date | null
}
