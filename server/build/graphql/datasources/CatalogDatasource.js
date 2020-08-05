"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
const app_config_1 = require("../../../../app.config");
const unitViewToUnit = (unit) => ({
    id: unit.id.value,
    title: unit.title,
    syllabus: unit.syllabus,
    optional: unit.optional
});
const feeViewToFee = (fee) => ({
    id: fee.id.value,
    description: fee.description,
    feeType: fee.feeType,
    amount: fee.amount,
    promotionalAmount: fee.promotionalAmount || 0,
    optional: fee.optional
});
const sessionViewToSession = ({ value, fees }) => ({
    id: value.id.value,
    title: value.title,
    startDate: value.startDate,
    status: value.status,
    fees: fees.map((fee) => feeViewToFee(fee))
});
const planViewToPlan = ({ value, title, description, fees, currentSessions }) => ({
    id: value.id.value,
    title,
    description,
    duration: value.duration,
    fees: fees.map((fee) => feeViewToFee(fee)),
    currentSessions: currentSessions.map((sess) => sessionViewToSession(sess))
});
const programViewToProgram = (prog) => ({
    id: prog.id.value,
    title: prog.title,
    description: prog.description,
    logo: prog.logo,
    link: prog.link
});
const departmentViewToDepartment = ({ value, programs }) => ({
    id: value.id.value,
    title: value.title,
    programs: programs.map((prog) => programViewToProgram(prog))
});
const trainingViewToTrainingSummary = (t) => ({
    id: t.id.value,
    title: t.title,
    description: t.description,
    banner: t.banner,
    link: t.link
});
const trainingViewToTraining = ({ value, units, plans }) => ({
    id: value.id.value,
    title: value.title,
    description: value.description,
    banner: value.banner,
    requiredOptionalUnits: value.requiredOptionalUnits,
    prerequisites: value.prerequisites,
    qualifications: value.qualifications,
    units: units.map((unit) => unitViewToUnit(unit)),
    plans: plans.map((plan) => planViewToPlan(plan)),
    link: value.link
});
class CatalogDatasource extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = app_config_1.apiBaseUrl;
    }
    getDepartments() {
        return __awaiter(this, void 0, void 0, function* () {
            const departments = yield this.get('/departments');
            return departments.map((dep) => departmentViewToDepartment(dep));
        });
    }
    getTrainingsByProgramId(programId) {
        return __awaiter(this, void 0, void 0, function* () {
            const trainings = yield this.get(`/programs/${programId}/trainings`);
            return trainings.map((t) => trainingViewToTrainingSummary(t));
        });
    }
    getTrainingById(trainingId) {
        return __awaiter(this, void 0, void 0, function* () {
            const training = yield this.get(`/trainings/${trainingId}`);
            return trainingViewToTraining(training);
        });
    }
    getDepartmentForProgram(programId) {
        return __awaiter(this, void 0, void 0, function* () {
            const dep = yield this.get(`/programs/${programId}/department`);
            return departmentViewToDepartment(dep);
        });
    }
    getProgramForTraining(trainingId) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = yield this.get(`/trainings/${trainingId}/program`);
            return programViewToProgram(p);
        });
    }
    getPlanForSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const plan = yield this.get(`/trainingsessions/${sessionId}/trainingPlan`);
            return planViewToPlan(plan);
        });
    }
    getTrainingForPlan(planId) {
        return __awaiter(this, void 0, void 0, function* () {
            const t = yield this.get(`/trainingplans/${planId}/training`);
            return trainingViewToTraining(t);
        });
    }
    getTrainingSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const ts = yield this.get(`/trainingsessions/${sessionId}`);
            return sessionViewToSession(ts);
        });
    }
}
exports.default = CatalogDatasource;
