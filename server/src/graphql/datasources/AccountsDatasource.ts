import {RESTDataSource} from 'apollo-datasource-rest'
import {apiBaseUrl} from '../../../../app.config'
import { IAccountFields } from "../../models/accounts/Account"
import { IAccountProfileFields, IProfileData } from "../../models/accounts/AccountProfile"
import { IEnrollmentFields } from '../../models/accounts/Enrollment'

const accountViewToAccount = (account: any): IAccountFields => ({
  id: account.id.value,
  email: account.email,
  fullName: account.fullName
})

const profileViewToProfile = (profile: any): IAccountProfileFields => ({
  id: profile.id.value,
  birthDate: profile.birthDate,
  birthPlace: profile.birthPlace,
  residence: profile.residence,
  phoneNumber: profile.phoneNumber,
  nationality: profile.nationality,
  otherDetails: profile.otherDetails
})

class AccountsDatasource extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = apiBaseUrl
  }

  willSendRequest(request) {
    request.headers.set('schoolman_token', this.context.token)
  }

  async getAccount(email: string): Promise<IAccountFields> {
    const account: any = await this.get(`/accounts/${email}`)
    return accountViewToAccount(account)
  }

  async getAccountProfile(email: string): Promise<IAccountProfileFields> {
    const profile: any = await this.get(`/accounts/${email}/profile`)
    return profile ? profileViewToProfile(profile) : null
  }

  async getAccountForProfile(profileId: number): Promise<IAccountFields> {
    const account: any = await this.get(`/profiles/${profileId}/account`)
    return accountViewToAccount(account)
  }

  async createProfile(accountId: any, data: IProfileData): Promise<any> {
    const profile: any = { accountId: parseInt(accountId, 10), ...data }
    const result = await this.post(`/createProfile`, profile)
    return profileViewToProfile(result)
  }

  async updateProfile(accountId: any, profileId: any, data: IProfileData): Promise<IAccountProfileFields> {
    const profile: any = { id: parseInt(profileId, 10), accountId: parseInt(accountId, 10), ...data }
    const result: any = await this.put(`/accountProfile`, profile)
    return profileViewToProfile(result)
  }

  async getEnrollments(accountId: number): Promise<IEnrollmentFields> {
    const enrs: any = await this.get(`/accounts/${accountId}/enrollments`)
    return enrs
  }
}

export default AccountsDatasource
