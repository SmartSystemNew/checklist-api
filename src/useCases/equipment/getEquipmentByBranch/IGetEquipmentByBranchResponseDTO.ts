import { Decimal } from '@prisma/client/runtime'

export default interface IGetEquipmentByBranchResponseDTO {
  id: number
  description: string
  code: string
  costCenter: number
  branchId: number
  clientId: number
  mileage: number | Decimal
  familyId: number | Decimal
  hourMeter: number | Decimal
}
