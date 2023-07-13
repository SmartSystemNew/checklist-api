import { FastifyInstance } from 'fastify'
import getEquipmentByBranch from '@/useCases/equipment/getEquipmentByBranch'
import getHourMeterAndMileage from '@/useCases/equipment/getHourMeterAndMileage'

export default async function equipmentRoutes(equipment: FastifyInstance) {
  equipment.get('/byBranch', getEquipmentByBranch.handle)
  equipment.get('/hourMeterAndMileage/:id', getHourMeterAndMileage.handle)
}
