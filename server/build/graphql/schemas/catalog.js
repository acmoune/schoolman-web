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
    logo: String
    link: String
    trainings: [Training]!
    department: Department!
  }

  type Training {
    id: ID!
    title: String!
    description: String!
    banner: String
    link: String
    requiredOptionalUnits: Int
    prerequisites: String
    qualifications: String
    units: [TrainingUnit]
    plans: [TrainingPlan]
    program: Program!
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
    training: Training!
  }

  type TrainingSession {
    id: ID!
    title: String!
    startDate: Date
    status: String!
    fees: [Fee]!
    plan: TrainingPlan!
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
    training(trainingId: ID!): Training
    trainingSession(trainingSessionId: ID!): TrainingSession
  }
`;
exports.resolvers = {
    Query: {
        departments: (_parent, _args, { dataSources }) => {
            return dataSources.catalogDatasource.getDepartments();
        },
        training: (_parent, args, { dataSources }) => {
            return dataSources.catalogDatasource.getTrainingById(args.trainingId);
        },
        trainingSession: (_parent, args, { dataSources }) => {
            return dataSources.catalogDatasource.getTrainingSession(args.trainingSessionId);
        }
    },
    Program: {
        trainings: (program, _args, { dataSources }) => {
            return dataSources.catalogDatasource.getTrainingsByProgramId(program.id);
        },
        department: (program, _args, { dataSources }) => {
            return dataSources.catalogDatasource.getDepartmentForProgram(program.id);
        }
    },
    Training: {
        program: (training, _args, { dataSources }) => {
            return dataSources.catalogDatasource.getProgramForTraining(training.id);
        }
    },
    TrainingPlan: {
        training: (tPlan, _args, { dataSources }) => {
            return dataSources.catalogDatasource.getTrainingForPlan(tPlan.id);
        }
    },
    TrainingSession: {
        plan(tSession, _args, { dataSources }) {
            return dataSources.catalogDatasource.getPlanForSession(tSession.id);
        }
    }
};
