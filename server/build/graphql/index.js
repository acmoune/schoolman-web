"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const lodash_1 = require("lodash");
const graphql_iso_date_1 = require("graphql-iso-date");
const catalog_1 = require("./schemas/catalog");
const CatalogDatasource_1 = __importDefault(require("./datasources/CatalogDatasource"));
const accounts_1 = require("./schemas/accounts");
const AccountsDatasource_1 = __importDefault(require("./datasources/AccountsDatasource"));
const Query = apollo_server_express_1.gql `
  scalar Date
  type Query { _empty: String }
  type Mutation { _empty: String }
`;
const resolvers = {
    Date: graphql_iso_date_1.GraphQLDate
};
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: [Query, catalog_1.typeDef, accounts_1.typeDef],
    resolvers: lodash_1.merge(resolvers, catalog_1.resolvers, accounts_1.resolvers),
    dataSources: () => ({
        catalogDatasource: new CatalogDatasource_1.default(),
        accountsDatasource: new AccountsDatasource_1.default()
    }),
    context: ({ req }) => {
        const token = req.headers.schoolman_token;
        return { token };
    }
});
exports.default = server;
