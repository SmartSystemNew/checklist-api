import { Decimal } from '@prisma/client/runtime'

export default interface IGetHourMeterAndMileageResponseDTO {
  hourMeter: number | Decimal
  mileage: number | Decimal
}
