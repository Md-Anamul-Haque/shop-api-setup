"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customerModel = (sequelize, DataTypes) => {
    const customer = sequelize.define('customer', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            primaryKey: true
        },
    }, {
        tableName: 'customers'
    });
    return customer;
};
exports.default = customerModel;
