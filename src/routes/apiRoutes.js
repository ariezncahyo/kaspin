import { Router } from 'express'
const router = Router()

import * as address from '../controllers/addressController'

router.get('/', (req,res)=>res.send("Pong"))
router.post('/provinsi', address.getProvinsiById)
router.post('/kecamatan', address.getKecamatanById)
router.post('/kelurahan', address.getKelurahanById)
router.post('/kecamatan_by_kotaid', address.getKecamatanByKota)

export default router
