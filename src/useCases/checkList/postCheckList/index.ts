import EquipmentRepository from '@/repositories/implementations/EquipmentRepository'
import PeriodRepository from '@/repositories/implementations/PeriodRepository'
import ProductionRegisterRepository from '@/repositories/implementations/ProductionRegisterRepository'
import PostCheckListUseCase from './postCheckListUseCase'
import PostCheckListController from './postCheckListController'

const productionRegisterRepository = new ProductionRegisterRepository()
const equipmentRepository = new EquipmentRepository()
const periodRepository = new PeriodRepository()

const useCase = new PostCheckListUseCase(
  productionRegisterRepository,
  equipmentRepository,
  periodRepository,
)

const controller = new PostCheckListController(useCase)

export default controller
