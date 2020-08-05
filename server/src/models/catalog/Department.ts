import IProgram from './Program'

export interface IDepartmentFields {
  id: number
  title: string
  programs: IProgram[]
}

export default interface IDepartment extends IDepartmentFields {}
