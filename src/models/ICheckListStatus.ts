import { smartnewsystem_producao_checklist_status_cor } from '@prisma/client'

export interface IInfo {
  id: number
  id_cliente: number | null
  id_controle: number | null
  descricao: string | null
  cor: smartnewsystem_producao_checklist_status_cor | null
  icone: string | null
}
