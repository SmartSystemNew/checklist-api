import { Decimal } from '@prisma/client/runtime'

export default interface IGetMileageResponseDTO {
  mileage: number | Decimal
}
