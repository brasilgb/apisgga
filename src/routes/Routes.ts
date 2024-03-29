import express from "express";
import AviarioControllers from "../controllers/AviarioControllers";

import CicloControllers from "../controllers/CicloControllers";
import ColetaControllers from "../controllers/ColetaControllers";
import LoteControllers from "../controllers/LoteControllers";
import MetaControllers from "../controllers/MetaControllers";
import EnvioControllers from "../controllers/EnvioControllers";
import MortalidadeControllers from "../controllers/MortalidadeControllers";
import PesagemControllers from "../controllers/PesagemControllers";
import RecebimentoControllers from "../controllers/RecebimentoControllers";

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
router.post("/searchlote", LoteControllers.GetLoteSearch);
router.post("/lotes", LoteControllers.CreateLote);
router.patch("/lotes", LoteControllers.UpdateLote);
router.delete("/lotes", LoteControllers.DeleteLote);

router.get("/aviarios", AviarioControllers.GetAviario);
router.get("/aviarios/:idAviario", AviarioControllers.GetAviarioById);
router.post("/searchaviario", AviarioControllers.GetAviarioSearch);
router.post("/aviarios", AviarioControllers.CreateAviario);
router.patch("/aviarios", AviarioControllers.UpdateAviario);
router.delete("/aviarios", AviarioControllers.DeleteAviario);

router.get("/coletas", ColetaControllers.GetColeta);
router.get("/coletas/:idColeta", ColetaControllers.GetColetaById);
router.get("/datacoleta/:date", ColetaControllers.GetColetaDate);
router.post("/coletas", ColetaControllers.CreateColeta);
router.patch("/coletas", ColetaControllers.UpdateColeta);
router.delete("/coletas", ColetaControllers.DeleteColeta);

router.get("/envios", EnvioControllers.GetEnvio);
router.get("/envios/:idEnvio", EnvioControllers.GetEnvioById);
router.post("/searchenvio", EnvioControllers.GetEnvioSearch);
router.post("/envios", EnvioControllers.CreateEnvio);
router.patch("/envios", EnvioControllers.UpdateEnvio);
router.delete("/envios", EnvioControllers.DeleteEnvio);

router.get("/mortalidades", MortalidadeControllers.GetMortalidade);
router.get("/mortalidades/:idMortalidade", MortalidadeControllers.GetMortalidadeById);
router.post("/searchmortalidade", MortalidadeControllers.GetMortalidadeSearch);
router.post("/mortalidades", MortalidadeControllers.CreateMortalidade);
router.patch("/mortalidades", MortalidadeControllers.UpdateMortalidade);
router.delete("/mortalidades", MortalidadeControllers.DeleteMortalidade);

router.get("/pesagens", PesagemControllers.GetPesagem);
router.get("/pesagens/:idPesagem", PesagemControllers.GetPesagemById);
router.post("/searchpesagem", PesagemControllers.GetPesagemSearch);
router.post("/pesagens", PesagemControllers.CreatePesagem);
router.patch("/pesagens", PesagemControllers.UpdatePesagem);
router.delete("/pesagens", PesagemControllers.DeletePesagem);

router.get("/recebimentos", RecebimentoControllers.GetRecebimento);
router.get("/recebimentos/:idRecebimento", RecebimentoControllers.GetRecebimentoById);
router.post("/searchrecebimento", RecebimentoControllers.GetRecebimentoSearch);
router.post("/recebimentos", RecebimentoControllers.CreateRecebimento);
router.patch("/recebimentos", RecebimentoControllers.UpdateRecebimento);
router.delete("/recebimentos", RecebimentoControllers.DeleteRecebimento);

export default router;