import { Model } from "mongoose";


export type IEmployee = {
    firstName:string,
    lastName:string,
    email:string,
    date:string,
    salary:string,
    status:boolean
}

export type EmployeeModel = Model<IEmployee, object>