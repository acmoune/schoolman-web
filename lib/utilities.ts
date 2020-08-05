export const isEmpty = (value: any) => (
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0)
)

export const makeFormData = (inputs: Array<{ field: string, value: any }>) => {
  let data = new FormData()
  inputs.forEach(input => data.append(input.field, input.value))
  return data
}

export const currency = (amount: number): string =>
  'USD ' + Intl.NumberFormat().format(amount)

