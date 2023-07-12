import { smartnewsystem_registro_producao_turno } from '@prisma/client'

export interface IListRegisterByTime {
  id: number
  DATA: Date | null
  status: number
  turno: smartnewsystem_registro_producao_turno | null
  equipment: {
    equipamento_codigo: string | null
    descricao: string | null
  } | null
}
