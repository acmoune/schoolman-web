import {gql, ApolloServer} from 'apollo-server-express'
import {merge} from 'lodash'
import {GraphQLDate} from 'graphql-iso-date'

import { typeDef as catatogTypeDef, resolvers as catalogResolvers } from './schemas/catalog'
import CatalogDatasource from './datasources/CatalogDatasource'

import { typeDef as accountsTypeDef, resolvers as accountsResolvers } from './schemas/accounts'
import AccountsDatasource from './datasources/AccountsDatasource'

export type Datasources = {
  catalogDatasource: CatalogDatasource
}

const Query = gql`
  scalar Date
  type Query { _empty: String }
  type Mutation { _empty: String }
`

const resolvers = {
  Date: GraphQLDate
}

const server = new ApolloServer({
  typeDefs: [Query, catatogTypeDef, accountsTypeDef],
  resolvers: merge(resolvers, catalogResolvers, accountsResolvers),
  dataSources: () => ({
    catalogDatasource: new CatalogDatasource(),
    accountsDatasource: new AccountsDatasource()
  }),
  context: ({ req }) => {
    const token = req.headers.schoolman_token
    return { token }
  }
})

export default server
