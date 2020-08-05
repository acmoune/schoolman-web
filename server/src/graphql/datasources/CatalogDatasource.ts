import {RESTDataSource} from 'apollo-datasource-rest'
import {apiBaseUrl} from '../../../../app.config'
import { IDepartmentFields } from '../../models/catalog/Department'
import { IProgramFields } from '../../models/catalog/Program'
import { ITrainingFields } from '../../models/catalog/Training'
import { ITrainingUnitFields } from '../../models/catalog/TrainingUnit'
import { ITrainingSummaryFields } from '../../models/catalog/TrainingSummary'
import { ITrainingPlanFields } from '../../models/catalog/TrainingPlan'
import { IFeeFields } from '../../models/catalog/Fee'
import { ITrainingSessionFields } from '../../models/catalog/TrainingSession'

const unitViewToUnit = (unit: any): ITrainingUnitFields => ({
  id: unit.id.value,
  title: unit.title,
  syllabus: unit.syllabus,
  optional: unit.optional
})

const feeViewToFee = (fee: any): IFeeFields => ({
  id: fee.id.value,
  description: fee.description,
  feeType: fee.feeType,
  amount: fee.amount,
  promotionalAmount: fee.promotionalAmount || 0,
  optional: fee.optional
})

const sessionViewToSession = ({ value, fees }: any): ITrainingSessionFields => ({
  id: value.id.value,
  title: value.title,
  startDate: value.startDate,
  status: value.status,
  fees: fees.map((fee: any) => feeViewToFee(fee))
})

const planViewToPlan = ({ value, title, description, fees, currentSessions }: any): ITrainingPlanFields => ({
  id: value.id.value,
  title,
  description,
  duration: value.duration,
  fees: fees.map((fee: any) => feeViewToFee(fee)),
  currentSessions: currentSessions.map((sess: any) => sessionViewToSession(sess))
})

const programViewToProgram = (prog: any): IProgramFields => ({
  id: prog.id.value,
  title: prog.title,
  description: prog.description,
  logo: prog.logo,
  link: prog.link
})

const departmentViewToDepartment = ({ value, programs }: any): IDepartmentFields => ({
  id: value.id.value,
  title: value.title,
  programs: programs.map((prog: any) => programViewToProgram(prog))
})

const trainingViewToTrainingSummary = (t: any): ITrainingSummaryFields => ({
  id: t.id.value, 
  title: t.title, 
  description: t.description, 
  banner: t.banner,
  link: t.link
})

const trainingViewToTraining = ({ value, units, plans }: any): ITrainingFields => ({
  id: value.id.value,
  title: value.title,
  description: value.description,
  banner: value.banner,
  requiredOptionalUnits: value.requiredOptionalUnits,
  prerequisites: value.prerequisites,
  qualifications: value.qualifications,
  units: units.map((unit: any) => unitViewToUnit(unit)),
  plans: plans.map((plan: any) => planViewToPlan(plan)),
  link: value.link
})


class CatalogDatasource extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = apiBaseUrl
  }

  async getDepartments(): Promise<IDepartmentFields[]> {
    const departments: any[] = await this.get('/departments')
    return departments.map((dep: any) => departmentViewToDepartment(dep))
  }

  async getTrainingsByProgramId(programId: number): Promise<ITrainingSummaryFields[]> {
    const trainings: any[] = await this.get(`/programs/${programId}/trainings`)
    return trainings.map((t: any) => trainingViewToTrainingSummary(t))
  }

  async getTrainingById(trainingId: number): Promise<ITrainingFields> {
    const training: any = await this.get(`/trainings/${trainingId}`)
    return trainingViewToTraining(training)
  }

  async getDepartmentForProgram(programId: number): Promise<IDepartmentFields> {
    const dep: any = await this.get(`/programs/${programId}/department`)
    return departmentViewToDepartment(dep)
  }

  async getProgramForTraining(trainingId: number): Promise<IProgramFields> {
    const p: any = await this.get(`/trainings/${trainingId}/program`)
    return programViewToProgram(p)
  }

  async getPlanForSession(sessionId: number): Promise<ITrainingPlanFields> {
    const plan: any = await this.get(`/trainingsessions/${sessionId}/trainingPlan`)
    return planViewToPlan(plan)
  }

  async getTrainingForPlan(planId: number): Promise<ITrainingFields> {
    const t: any = await this.get(`/trainingplans/${planId}/training`)
    return trainingViewToTraining(t)
  }

  async getTrainingSession(sessionId: number): Promise<ITrainingSessionFields> {
    const ts: any = await this.get(`/trainingsessions/${sessionId}`)
    return sessionViewToSession(ts)
  }
}

export default CatalogDatasource
