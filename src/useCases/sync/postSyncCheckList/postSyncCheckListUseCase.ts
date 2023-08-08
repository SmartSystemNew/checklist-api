import IUseCase from '../../../models/IUseCase'
import IPostSyncCheckListRequestDTO from './IPostSyncCheckListRequestDTO'
import IProductionRegisterRepository from '../../../repositories/IProductionRegisterRepository'
import ICheckListPeriodRepository from '../../../repositories/ICheckListPeriodRepository'
import IEquipmentRepository from '../../../repositories/IEquipmentRepository'
import CustomError from '@/config/CustomError'

export default class PostSyncCheckListUseCase implements IUseCase {
  constructor(
    private productionRegisterRepository: IProductionRegisterRepository,
    private equipmentRepository: IEquipmentRepository,
    private checkListPeriodRepository: ICheckListPeriodRepository,
  ) {}

  async execute(data: IPostSyncCheckListRequestDTO) {
    // inserted
    for await (const productionRegisterItem of data.checkListSchema.inserted) {
      const allCheckListPeriod = data.checkListPeriod.inserted.filter(
        (item) => item.productionRegisterId === productionRegisterItem._id,
      )

      const equipment = await this.equipmentRepository.findById(
        productionRegisterItem.equipmentId,
      )

      if (!equipment) {
        throw CustomError.notFound('Equipamento não encontrado!')
      }

      const productionRegister = await this.productionRegisterRepository.save({
        id_centro_custo: equipment.id_centro_custo,
        id_equipamento: equipment.ID,
        id_turno: productionRegisterItem.periodId,
        quilometragem: productionRegisterItem.mileage,
        quilometragem_final: productionRegisterItem.finalMileage,
        login: productionRegisterItem.login,
        DATA: productionRegisterItem.date,
        data_hora_inicio: productionRegisterItem.initialTime,
        data_hora_encerramento: productionRegisterItem.finalTime,
        turno: null,
        status: productionRegisterItem.status === 'open' ? 1 : 0,
        idlog: 0,
      })

      for await (const checkListPeriodItem of allCheckListPeriod) {
        await this.checkListPeriodRepository.create({
          id_filial: checkListPeriodItem.branchId,
          id_registro_producao: productionRegister.id,
          id_item_checklist: checkListPeriodItem.checkListItemId,
          status_item: checkListPeriodItem.statusItem,
          status_item_nc: checkListPeriodItem.statusNC,
          observacao: checkListPeriodItem.observation,
          log_date: checkListPeriodItem.logDate,
        })
      }
    }

    // updated
    for await (const productionRegisterItem of data.checkListSchema.updated) {
      const allCheckListPeriod = data.checkListPeriod.updated.filter(
        (item) => item.productionRegisterId === productionRegisterItem.id,
      )

      await this.productionRegisterRepository.update(
        productionRegisterItem.id,
        {
          quilometragem: productionRegisterItem.mileage,
          quilometragem_final: productionRegisterItem.finalMileage,
          DATA: productionRegisterItem.date,
          data_hora_inicio: productionRegisterItem.initialTime,
          data_hora_encerramento: productionRegisterItem.finalTime,
          turno: null,
          status: productionRegisterItem.status === 'open' ? 1 : 0,
          idlog: 0,
        },
      )

      for await (const checkListPeriodItem of allCheckListPeriod) {
        await this.checkListPeriodRepository.update(checkListPeriodItem.id, {
          status_item: checkListPeriodItem.statusItem,
          status_item_nc: checkListPeriodItem.statusNC,
          observacao: checkListPeriodItem.observation,
          log_date: checkListPeriodItem.logDate,
        })
      }
    }

    return {
      synchronized: true,
    }
  }
}
