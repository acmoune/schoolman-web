import ITrainingUnit from './TrainingUnit'
import ITrainingPlan from './TrainingPlan'
import IProgram from './Program'

export interface ITrainingFields {
  id: number
  title: string
  description: string
  banner: string
  requiredOptionalUnits: number
  prerequisites: string
  qualifications: string
  units: ITrainingUnit[]
  plans: ITrainingPlan[]
  link?: string
}

export default interface ITraining extends ITrainingFields {
  program: IProgram
}
