import express from "express";

import CicloControllers from "../controllers/CicloControllers";
import MetaControllers from "../controllers/MetaControllers";

const router = express.Router();

router.get("/ciclos", CicloControllers.GetCiclo);
router.get("/ciclos/:idCiclo", CicloControllers.GetCicloById);
router.post("/ciclos", CicloControllers.CreateCiclo);
router.patch("/ciclos", CicloControllers.UpdateCiclo);
router.delete("/ciclos", CicloControllers.DeleteCiclo);

router.get("/metas", MetaControllers.GetMeta);
router.get("/metas/:idMeta", MetaControllers.GetMetaById);
router.post("/metas", MetaControllers.CreateMeta);
router.patch("/metas", MetaControllers.UpdateMeta);
router.delete("/metas", MetaControllers.DeleteMeta);



export default router;