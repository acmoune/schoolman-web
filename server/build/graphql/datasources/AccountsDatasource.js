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
const accountViewToAccount = (account) => ({
    id: account.id.value,
    email: account.email,
    fullName: account.fullName
});
const profileViewToProfile = (profile) => ({
    id: profile.id.value,
    birthDate: profile.birthDate,
    birthPlace: profile.birthPlace,
    residence: profile.residence,
    phoneNumber: profile.phoneNumber,
    nationality: profile.nationality,
    otherDetails: profile.otherDetails
});
class AccountsDatasource extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = app_config_1.apiBaseUrl;
    }
    willSendRequest(request) {
        request.headers.set('schoolman_token', this.context.token);
    }
    getAccount(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield this.get(`/accounts/${email}`);
            return accountViewToAccount(account);
        });
    }
    getAccountProfile(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.get(`/accounts/${email}/profile`);
            return profile ? profileViewToProfile(profile) : null;
        });
    }
    getAccountForProfile(profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield this.get(`/profiles/${profileId}/account`);
            return accountViewToAccount(account);
        });
    }
    createProfile(accountId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = Object.assign({ accountId: parseInt(accountId, 10) }, data);
            const result = yield this.post(`/createProfile`, profile);
            return profileViewToProfile(result);
        });
    }
    updateProfile(accountId, profileId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = Object.assign({ id: parseInt(profileId, 10), accountId: parseInt(accountId, 10) }, data);
            const result = yield this.put(`/accountProfile`, profile);
            return profileViewToProfile(result);
        });
    }
    getEnrollments(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const enrs = yield this.get(`/accounts/${accountId}/enrollments`);
            return enrs;
        });
    }
}
exports.default = AccountsDatasource;
