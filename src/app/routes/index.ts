import express from 'express'
import { ParamsDictionary, RequestHandler } from 'express-serve-static-core'
import { ParsedQs } from 'qs'

import { EmployeeRoutes } from '../modules/employee/employee.routes'


const router = express.Router()

const moduleRoutes:any = [
    {
        path: '/employee',
        route: EmployeeRoutes.router,
    },

]

moduleRoutes.forEach((route: { path: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>; route: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>> }) => router.use(route.path, route.route))

export default router
