import httpStatus from 'http-status'
import ApiError from '../../errors/ApiError'
import { IEmployee } from './employee.interface'
import { Employee } from './employee.model'


const addEmployee = async (payload: IEmployee) => {
  const result = await Employee.create(payload)
  return result
}

const getAllEmployees = async () => {
  const result = await Employee.find()
  return result
}

const getSingleEmployee = async (id: string) => {
  const result = await Employee.findById(id)
  return result
}

const updateEmployee = async (
  id: string,
  paylod: IEmployee,
): Promise<IEmployee | null> => {
  const result = await Employee.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteEmployee = async (id: string) => {
  const services = await Employee.findById(id)
  if (!services) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Employee Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Employee.findByIdAndDelete(id)
  return result
}

export const EmployeeService = {
  addEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
  getSingleEmployee,
}
