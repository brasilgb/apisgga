import express from "express";
import AviarioControllers from "../controllers/AviarioControllers";

import CicloControllers from "../controllers/CicloControllers";
import LoteControllers from "../controllers/LoteControllers";
import MetaControllers from "../controllers/MetaControllers";

const router = express.Router();

router.get("/ciclos", CicloControllers.GetCiclo);
router.get("/ciclos/:idCiclo", CicloControllers.GetCicloById);
router.get("/date/:date", CicloControllers.GetCicloDate);
router.post("/ciclos", CicloControllers.CreateCiclo);
router.patch("/ciclos", CicloControllers.UpdateCiclo);
router.delete("/ciclos", CicloControllers.DeleteCiclo);

router.get("/metas", MetaControllers.GetMeta);
router.get("/metas/:idMeta", MetaControllers.GetMetaById);
router.post("/metas", MetaControllers.CreateMeta);
router.patch("/metas", MetaControllers.UpdateMeta);
router.delete("/metas", MetaControllers.DeleteMeta);

router.get("/lotes", LoteControllers.GetLote);
router.get("/lotes/:idLote", LoteControllers.GetLoteById);
router.get("/loteExist/:idLote/:lote", LoteControllers.GetLoteExists);
router.post("/lotes", LoteControllers.CreateLote);
router.patch("/lotes", LoteControllers.UpdateLote);
router.delete("/lotes", LoteControllers.DeleteLote);

router.get("/aviarios", AviarioControllers.GetAviario);
router.get("/aviarios/:idAviario", AviarioControllers.GetAviarioById);
router.post("/aviarios", AviarioControllers.CreateAviario);
router.patch("/aviarios", AviarioControllers.UpdateAviario);
router.delete("/aviarios", AviarioControllers.DeleteAviario);

export default router;