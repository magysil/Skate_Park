import express from "express";
import { vistaPerfil, editarPerfilSkater,eliminarPerfilSkater } from "../controller/vistaPerfil.js";
import { verifyToken } from '../middlewares/authMiddlewares.js';

const router = express.Router();


router.get("/", verifyToken, vistaPerfil);
router.put('/', verifyToken,editarPerfilSkater)
router.delete('/',verifyToken,eliminarPerfilSkater)
export default router;
