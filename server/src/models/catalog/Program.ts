import ITrainingSummary from "./TrainingSummary"
import IDepartment from "./Department"

export interface IProgramFields {
  id: number
  title: string
  description: string
  logo?: string
  link?: string
}

export default interface IProgram extends IProgramFields {
  trainings: ITrainingSummary[]
  department: IDepartment
}
