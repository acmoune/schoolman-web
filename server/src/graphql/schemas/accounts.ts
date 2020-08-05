import { gql } from 'apollo-server-express'
import { IAccountFields } from '../../models/accounts/Account'
import IAccount from '../../models/accounts/Account'
import { IAccountProfileFields, IProfileData } from '../../models/accounts/AccountProfile'
import IAccountProfile from '../../models/accounts/AccountProfile'
import AccountsDatasource from '../datasources/AccountsDatasource'
import { IEnrollmentFields } from '../../models/accounts/Enrollment'

export const typeDef = gql`
  type Account {
    id: ID!
    email: String!
    fullName: String!
    profile: AccountProfile
  }

  input ProfileDataInput {
    birthDate: String!
    birthPlace: String!
    residence: String!
    phoneNumber: String!
    nationality: String!
    otherDetails: String
  }

  type AccountProfile {
    id: ID!
    account: Account!

    birthDate: Date!
    birthPlace: String!
    residence: String!
    phoneNumber: String!
    nationality: String!
    otherDetails: String
  }

  type Payment {
    paymentId: ID!
    amount: Float!
    date: Date!
  }

  type Bill {
    billId: ID!
    feeType: String!
    description: String!
    amount: Float!
    payments: [Payment]!
  }

  type Enrollment {
    enrollmentId: ID!
    sessionTitle: String!
    trainingTitle: String!
    planTitle: String!
    programTitle: String!
    departmentTitle: String!
    startDate: Date
    duration: String!
    sessionStatus: String!
    bills: [Bill]!
  }

  extend type Query {
    account(email: String!): Account
    enrollments(accountId: ID!): [Enrollment]
  }

  extend type Mutation {
    createProfile(accountId: ID!, data: ProfileDataInput!): AccountProfile
    updateProfile(accountId: ID!, profileId: ID!, data: ProfileDataInput!): AccountProfile
  }
`

type Context = {
  dataSources: {
    accountsDatasource: AccountsDatasource
  }
}

export const resolvers = {
  Query: {
    account: (_parent: any, args: { email: string }, { dataSources }: Context): Promise<IAccountFields> => {
      return dataSources.accountsDatasource.getAccount(args.email)
    },

    enrollments: (_parent: any, args: { accountId: number }, { dataSources }: Context): Promise<IEnrollmentFields> => {
      return dataSources.accountsDatasource.getEnrollments(args.accountId)
    }
  },

  Account: {
    profile: (account: IAccount, _args: any, { dataSources }: Context): Promise<IAccountProfileFields> => {
      return dataSources.accountsDatasource.getAccountProfile(account.email)
    }
  },

  AccountProfile: {
    account: (profile: IAccountProfile, _args: any, { dataSources }: Context): Promise<IAccountFields> => {
      return dataSources.accountsDatasource.getAccountForProfile(profile.id)
    }
  },

  Mutation: {
    createProfile: (_parent: any, args: { accountId: number, data: IProfileData }, { dataSources }: Context): Promise<IAccountProfileFields> => {
      return dataSources.accountsDatasource.createProfile(args.accountId, args.data)
    },

    updateProfile: (_parent: any, args: { accountId: number, profileId: number, data: IProfileData }, { dataSources }: Context): Promise<IAccountProfileFields> => {
      return dataSources.accountsDatasource.updateProfile(args.accountId, args.profileId, args.data)
    }
  }
}
