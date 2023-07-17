import EquipmentRepository from '@/repositories/implementations/EquipmentRepository'
import GetEquipmentByBranchUseCase from './getEquipmentByBranchUseCase'
import GetEquipmentByBranchController from './getEquipmentByBranchController'
import ProductionRegisterRepository from '@/repositories/implementations/ProductionRegisterRepository'

const equipmentRepository = new EquipmentRepository()
const productionRegisterRepository = new ProductionRegisterRepository()

const useCase = new GetEquipmentByBranchUseCase(
  equipmentRepository,
  productionRegisterRepository,
)

const controller = new GetEquipmentByBranchController(useCase)

export default controller
