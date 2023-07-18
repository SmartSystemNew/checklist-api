export interface IFindTaskByFamily {
  checkList: {
    id_familia: number | null
  } | null
  checkListTask: {
    id: number
    descricao: string | null
  } | null
}
