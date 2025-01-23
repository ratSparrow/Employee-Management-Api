import mongoose, { model } from "mongoose";
import { EmployeeModel, IEmployee } from "./employee.interface";


const EmployeeSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true
    },
},
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    });

export const Employee = model<IEmployee, EmployeeModel>('employee', EmployeeSchema);