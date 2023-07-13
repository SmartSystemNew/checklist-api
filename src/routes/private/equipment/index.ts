import { FastifyInstance } from 'fastify'
import getEquipmentByBranch from '@/useCases/equipment/getEquipmentByBranch'

export default async function equipmentRoutes(equipment: FastifyInstance) {
  equipment.get('/byBranch', getEquipmentByBranch.handle)
}
