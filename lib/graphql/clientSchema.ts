import { gql } from 'apollo-boost'

export const typeDefs = gql`
  type Applier {
    name: String!
    email: String!
  }

  type ProfileData {
    birthDate: Date
    birthPlace: String
    residence: String
    phoneNumber: String
    nationality: String
    otherDetails: String
  }

  extend type Query {
    applier: Applier
    applicationProfile: ProfileData
  }
`

export const resolvers = {}
