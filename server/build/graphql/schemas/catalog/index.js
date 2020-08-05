"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDef = apollo_server_express_1.gql `
  type Department {
    id: ID!
    title: String!
    programs: [Program]!
  }

  type Program {
    id: ID!
    title: String!
    description: String!
    logo: String!
    link: String
    trainings: [TrainingSummary]!
  }

  type TrainingSummary {
    id: ID!
    title: String!
    description: String!
    banner: String!
  }

  type Training {
    id: ID!
    title: String!
    description: String!
    requiredOptionalUnits: Int!
    prerequisites: String
    qualifications: String
    link: String
    banner: String!
    units: [TrainingUnit]!
    plans: [TrainingPlan]!
  }

  type TrainingUnit {
    id: ID!
    title: String!
    syllabus: String!
    optional: Boolean!
  }

  type TrainingPlan {
    id: ID!
    title: String!
    description: String!
    duration: String!
    fees: [Fee]!
    currentSessions: [TrainingSession]!
  }

  type TrainingSession {
    id: ID!
    title: String!
    startDate: Date!
    status: String!
    fees: [Fee]!
  }

  type Fee {
    id: ID!
    description: String!
    feeType: String!
    amount: Float!
    promotionalAmount: Float!
    optional: Boolean!
  }

  extend type Query {
    departments: [Department]
    training(id: Int!): Training
  }
`;
exports.resolvers = {
    Query: {
        departments: (_parent, _args, { dataSources }) => {
            const DS = dataSources;
            return DS.catalogDatasource.getDepartments();
        },
        training: (_parent, args, { dataSources }) => {
            const DS = dataSources;
            return DS.catalogDatasource.getTrainingById(args.id);
        }
    },
    Program: {
        trainings: (prog, _args, { dataSources }) => {
            const DS = dataSources;
            return DS.catalogDatasource.getTrainingsByProgramId(prog.id);
        }
    }
};
