export interface IListByBranch {
  ID: number
  equipamento_codigo: string | null
  descricao: string | null
  ID_cliente: number | null
  ID_filial: number | null
  ID_familia: number | null
  id_centro_custo: number | null
}

export interface IListFamilyByBranch {
  ID_familia: number | null
}
