import EquipmentRepository from '@/repositories/implementations/EquipmentRepository'
import GetEquipmentByBranchUseCase from './getEquipmentByBranchUseCase'
import GetEquipmentByBranchController from './getEquipmentByBranchController'

const equipmentRepository = new EquipmentRepository()

const useCase = new GetEquipmentByBranchUseCase(equipmentRepository)

const controller = new GetEquipmentByBranchController(useCase)

export default controller
