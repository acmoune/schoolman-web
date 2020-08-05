export interface ITrainingSummaryFields {
  id: number
  title: string
  description: string
  banner: string
  link?: string
}

export default interface TrainingSummary extends ITrainingSummaryFields {}
