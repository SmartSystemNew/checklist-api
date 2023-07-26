import { Decimal } from '@prisma/client/runtime/library'

export default interface IGetInfoResponseDTO {
  id: number
  id_centro_custo: number
  id_equipamento: number
  id_turno: number | null
  quilometragem: number | Decimal | null
  quilometragem_final: number | Decimal | null
  login: string
  DATA: Date | null
  data_hora_inicio: Date | null
  data_hora_encerramento: Date | null
  status: number
  data_log: Date | null
}
