"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDef = apollo_server_express_1.gql `
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
`;
exports.resolvers = {
    Query: {
        account: (_parent, args, { dataSources }) => {
            return dataSources.accountsDatasource.getAccount(args.email);
        },
        enrollments: (_parent, args, { dataSources }) => {
            return dataSources.accountsDatasource.getEnrollments(args.accountId);
        }
    },
    Account: {
        profile: (account, _args, { dataSources }) => {
            return dataSources.accountsDatasource.getAccountProfile(account.email);
        }
    },
    AccountProfile: {
        account: (profile, _args, { dataSources }) => {
            return dataSources.accountsDatasource.getAccountForProfile(profile.id);
        }
    },
    Mutation: {
        createProfile: (_parent, args, { dataSources }) => {
            return dataSources.accountsDatasource.createProfile(args.accountId, args.data);
        },
        updateProfile: (_parent, args, { dataSources }) => {
            return dataSources.accountsDatasource.updateProfile(args.accountId, args.profileId, args.data);
        }
    }
};
