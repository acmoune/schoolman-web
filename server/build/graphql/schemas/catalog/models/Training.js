"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Training {
    constructor(id, title, description, requiredOptionalUnits, prerequisites, qualifications, link, banner, units, plans) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.requiredOptionalUnits = requiredOptionalUnits;
        this.prerequisites = prerequisites;
        this.qualifications = qualifications;
        this.link = link;
        this.banner = banner;
        this.units = units;
        this.plans = plans;
    }
}
exports.default = Training;
