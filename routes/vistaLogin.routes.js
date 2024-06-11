import express from 'express';
const router = express.Router();

import { vistaLogin,loginSkeater } from '../controller/vistaLogin.js';

router.get('/', vistaLogin)
router.post('/', loginSkeater)


export default router;