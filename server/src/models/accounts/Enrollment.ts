export interface IPayment {
  paymentId: number
  amount: number
  date: Date
}

export interface IBill {
  billId: number
  feeType: string
  description: string
  amount: number
  payments: IPayment[]
}

export interface IEnrollmentFields {
  enrollmentId: number
  sessionTitle: string
  trainingTitle: string
  planTitle: string
  programTitle: string
  departmentTitle: string
  startDate?: Date
  duration: string
  sessionStatus: string
  bills: IBill[]
}

export default interface IEnrollment extends IEnrollmentFields {}
