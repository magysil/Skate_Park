import express from 'express';
import { vistaAdmin,actualizarEstadoSkater } from '../controller/vistaAdmin.js';
import { verifyToken } from '../middlewares/authMiddlewares.js';

const router = express.Router();


router.get('/', verifyToken,  vistaAdmin)
router.put('/:id', verifyToken, actualizarEstadoSkater);

export default router;