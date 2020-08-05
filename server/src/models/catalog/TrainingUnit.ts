export interface ITrainingUnitFields {
  id: number
  title: string
  syllabus: string
  optional: boolean
}

export default interface TrainingUnit extends ITrainingUnitFields {}
