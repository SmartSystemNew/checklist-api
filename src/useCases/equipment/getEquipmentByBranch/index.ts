import EquipmentRepository from '@/repositories/implementations/EquipmentRepository'
import GetEquipmentByBranchUseCase from './getEquipmentByBranchUseCase'
import GetEquipmentByBranchController from './getEquipmentByBranchController'
import ProductionRegisterRepository from '@/repositories/implementations/ProductionRegisterRepository'
import ProductionRegisterDataRepository from '@/repositories/implementations/ProductionRegisterDataRepository'

const equipmentRepository = new EquipmentRepository()
const productionRegisterRepository = new ProductionRegisterRepository()
const productionRegisterDataRepository = new ProductionRegisterDataRepository()

const useCase = new GetEquipmentByBranchUseCase(
  equipmentRepository,
  productionRegisterRepository,
  productionRegisterDataRepository,
)

const controller = new GetEquipmentByBranchController(useCase)

export default controller
