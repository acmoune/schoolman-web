export interface IFeeFields {
  id: number
  description: string
  feeType: string
  amount: number
  promotionalAmount: number
  optional: boolean
}

export default interface IFee extends IFeeFields {}
