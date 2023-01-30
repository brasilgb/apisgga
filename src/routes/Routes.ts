import express from "express";

import CicloControllers from "../controllers/CicloControllers";

const router = express.Router();

router.get("/ciclos", CicloControllers.GetCiclo);
router.get("/ciclos/:idCiclo", CicloControllers.GetCicloById);
router.post("/ciclos", CicloControllers.CreateCiclo);
router.patch("/ciclos", CicloControllers.UpdateCiclo);
router.delete("/ciclos/:idCiclo", CicloControllers.DeleteCiclo);

export default router;