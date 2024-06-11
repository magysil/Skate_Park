import express from 'express';
const router = express.Router();

import { vistaRegister, registrarSkater } from '../controller/vistaRegister.js';

router.get('/', vistaRegister)
router.post('/', registrarSkater)

export default router;