import { Router } from 'express'
import apiRoutes from './apiRoutes'

const router = Router()

router.use('/api/v1', apiRoutes)

export default router
