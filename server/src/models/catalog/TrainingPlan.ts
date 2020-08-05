import IFee from './Fee'
import ITrainingSession from './TrainingSession'
import ITraining from './Training'

export interface ITrainingPlanFields {
  id: number
  title: string
  description: string
  duration: string
  fees: IFee[]
  currentSessions: ITrainingSession[]
}

export default interface ITrainingPlan extends ITrainingPlanFields {
  training: ITraining
}
