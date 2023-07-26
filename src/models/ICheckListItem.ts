export interface IFindTaskByFamily {
  id: number
  checkList: {
    id_familia: number | null
  } | null
  checkListTask: {
    id: number
    descricao: string | null
  } | null
}

export interface IInfo {
  id: number
  id_checklist: number | null
  id_tarefa: number | null
  id_controle: number | null
}
