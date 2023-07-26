import { IListBoundBranch } from './IBranchXUser'

export interface IFindByLogin {
  login: string
  pswd: string
  new_pswd: string | null
  name: string | null
  id_cliente: number | null
}

export interface IUser {
  sub: string
  login: string
  pswd: string
  new_pswd: string | null
  name: string | null
  id_cliente: number
  branchBound: IListBoundBranch[]
}
