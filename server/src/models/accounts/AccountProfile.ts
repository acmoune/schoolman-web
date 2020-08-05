import IAccount from './Account'

export interface IProfileData {
  birthDate: string
  birthPlace: string
  residence: string
  phoneNumber: string
  nationality: string

  otherDetails?: string
}

export interface IAccountProfileFields extends IProfileData {
  id: number
}

export default interface IAccountProfile extends IAccountProfileFields {
  account: IAccount
}
