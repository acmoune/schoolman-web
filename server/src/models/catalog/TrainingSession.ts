import IFee from './Fee'
import ITrainingPlan from './TrainingPlan'

export interface ITrainingSessionFields {
  id: number
  title: string
  startDate?: string
  status: string
  fees: IFee[]
}

export default interface ITrainingSession extends ITrainingSessionFields {
  plan: ITrainingPlan
}
