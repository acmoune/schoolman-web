"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TrainingPlan {
    constructor(id, title, description, duration, fees, currentSessions) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.fees = fees;
        this.currentSessions = currentSessions;
    }
}
exports.default = TrainingPlan;
