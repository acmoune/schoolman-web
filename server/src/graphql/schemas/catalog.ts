import { gql } from 'apollo-server-express'
import { IDepartmentFields } from '../../models/catalog/Department'
import ITraining, { ITrainingFields } from '../../models/catalog/Training'
import { ITrainingSummaryFields } from '../../models/catalog/TrainingSummary'
import IProgram, { IProgramFields } from '../../models/catalog/Program'
import ITrainingPlan, { ITrainingPlanFields } from '../../models/catalog/TrainingPlan'
import ITrainingSession, { ITrainingSessionFields } from '../../models/catalog/TrainingSession'
import CatalogDatasource from '../datasources/CatalogDatasource' 

export const typeDef = gql`
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
`

type Context = {
  dataSources: {
    catalogDatasource: CatalogDatasource
  }
}

export const resolvers = {
  Query: {
    departments: (_parent: any, _args: any, { dataSources }: Context): Promise<IDepartmentFields[]> => {
      return dataSources.catalogDatasource.getDepartments()
    },

    training: (_parent: any, args: { trainingId: number }, { dataSources }: Context): Promise<ITrainingFields> => {
      return dataSources.catalogDatasource.getTrainingById(args.trainingId)
    },

    trainingSession: (_parent: any, args: { trainingSessionId: number }, { dataSources }: Context): Promise<ITrainingSessionFields> => {
      return dataSources.catalogDatasource.getTrainingSession(args.trainingSessionId)
    }
  },

  Program: {
    trainings: (program: IProgram, _args: any, { dataSources }: Context): Promise<ITrainingSummaryFields[]> => {
      return dataSources.catalogDatasource.getTrainingsByProgramId(program.id)
    },
  
    department: (program: IProgram, _args: any, { dataSources }: Context): Promise<IDepartmentFields> => {
      return dataSources.catalogDatasource.getDepartmentForProgram(program.id)
    }
  },

  Training: {
    program: (training: ITraining, _args: any, { dataSources }: Context): Promise<IProgramFields> => {
      return dataSources.catalogDatasource.getProgramForTraining(training.id)
    }
  },

  TrainingPlan: {
    training: (tPlan: ITrainingPlan, _args: any, { dataSources }: Context): Promise<ITrainingFields> => {
      return dataSources.catalogDatasource.getTrainingForPlan(tPlan.id)
    }
  },

  TrainingSession: {
    plan(tSession: ITrainingSession, _args: any, { dataSources }: Context): Promise<ITrainingPlanFields> {
      return dataSources.catalogDatasource.getPlanForSession(tSession.id)
    }
  }
}
