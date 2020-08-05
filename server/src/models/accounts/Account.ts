import IAccountProfile from './AccountProfile'

export interface IAccountFields {
  id: number
  email: string
  fullName: string
}

export default interface IAccount extends IAccountFields {
  profile: IAccountProfile
}
