"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fee {
    constructor(id, description, feeType, amount, promotionalAmount, optional) {
        this.id = id;
        this.description = description;
        this.feeType = feeType;
        this.amount = amount;
        this.promotionalAmount = promotionalAmount;
        this.optional = optional;
    }
}
exports.default = Fee;
