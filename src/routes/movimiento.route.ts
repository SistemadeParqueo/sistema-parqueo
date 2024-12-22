import { Router } from "express";
import { insertarMovimiento } from "../controllers/movimiento.controller";

const router:Router = Router();

router.post('/',insertarMovimiento);
router.get('/',listarMovimiento);
router.get('/:idMovimiento',obtenerMovimiento);
router.put('/:idMovimiento',actualizarMovimiento);
router.delete('/:idMovimiento',darBajaMovimiento);
export default router;

