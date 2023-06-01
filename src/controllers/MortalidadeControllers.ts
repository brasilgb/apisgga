import { Request, Response } from "express";

import Mortalidade from "../db/models/Mortalidade";
import Ciclo from "../db/models/Ciclo";
import Helper from "../helpers/Helper";

const GetMortalidade = async (req: Request, res: Response): Promise<Response> => {
    try {

        const ciclos = await Ciclo.findAll({
            where: {
                ativo: true
            }
        });

        const mortalidades = await Mortalidade.findAll({
            where: {
                cicloId: ciclos ? ciclos[0]?.idCiclo : 0
            },
            include: ['lotes', 'aviarios']
        });

        return res.status(200).send({
            status: 200,
            message: 'ok',
            ciclos: ciclos.length > 0 ? true : false,
            data: mortalidades
                .map((av: any, iav: any) => (
                    {
                        idMortalidade: av.idMortalidade,
                        cicloId: av.cicloId,
                        loteId: av.loteId,
                        lote: av.lotes.lote,
                        aviarioId: av.aviarioId,
                        aviario: av.aviarios.aviario,
                        dataMorte: av.dataMorte,
                        causaMorte: av.causaMorte,
                        outraCausa: av.outraCausa,
                        box1Femea: av.box1Femea,
                        box2Femea: av.box2Femea,
                        box3Femea: av.box3Femea,
                        box4Femea: av.box4Femea,
                        box1Macho: av.box1Macho,
                        box2Macho: av.box2Macho,
                        box3Macho: av.box3Macho,
                        box4Macho: av.box4Macho,
                        totalFemeas: av.totalFemeas,
                        totalMachos: av.totalMachos,
                        totalAves: av.totalAves,
                    }
                ))
        });
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const GetMortalidadeById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idMortalidade } = req.params;

        const mortalidades = await Mortalidade.findByPk(idMortalidade, {
            include: ['lotes', 'aviarios']
        });

        if (!mortalidades) {
            return res.status(404).send({
                status: 404,
                message: "Dado não encontrado",
                data: null
            })
        }

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: { mortalidades }
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};
const GetMortalidadeSearch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { date } = req.body;

        const ciclos = await Ciclo.findAll({
            where: {
                ativo: true
            }
        });

        const mortalidades = await Mortalidade.findAll({
            where: {
                dataMorte: date
            },
            include: ['lotes', 'aviarios']
        });

        if (!mortalidades) {
            return res.status(404).send({
                status: 404,
                message: "Lote não encontrado",
                data: null
            })
        }

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: mortalidades
            .map((av: any, iav: any) => (
                {
                    idMortalidade: av.idMortalidade,
                    cicloId: av.cicloId,
                    loteId: av.loteId,
                    lote: av.lotes.lote,
                    aviarioId: av.aviarioId,
                    aviario: av.aviarios.aviario,
                    dataMorte: av.dataMorte,
                    causaMorte: av.causaMorte,
                    outraCausa: av.outraCausa,
                    box1Femea: av.box1Femea,
                    box2Femea: av.box2Femea,
                    box3Femea: av.box3Femea,
                    box4Femea: av.box4Femea,
                    box1Macho: av.box1Macho,
                    box2Macho: av.box2Macho,
                    box3Macho: av.box3Macho,
                    box4Macho: av.box4Macho,
                    totalFemeas: av.totalFemeas,
                    totalMachos: av.totalMachos,
                    totalAves: av.totalAves,
                }
            ))
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const CreateMortalidade = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { data } = req.body;

        const create = await Mortalidade.create({
            cicloId: data.cicloId,
            loteId: data.loteId,
            aviarioId: data.aviarioId,
            dataMorte: data.dataMorte,
            causaMorte: data.causaMorte,
            outraCausa: data.outraCausa,
            box1Femea: data.box1Femea,
            box2Femea: data.box2Femea,
            box3Femea: data.box3Femea,
            box4Femea: data.box4Femea,
            box1Macho: data.box1Macho,
            box2Macho: data.box2Macho,
            box3Macho: data.box3Macho,
            box4Macho: data.box4Macho,
            totalFemeas: data.totalFemeas,
            totalMachos: data.totalMachos,
            totalAves: data.totalAves
        });

        return res.status(201).send({
            status: 201,
            message: 'Mortes registradas com sucesso',
            data: create
        })

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const UpdateMortalidade = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { data } = req.body;

        const mortalidades = await Mortalidade.findByPk(data.idMortalidade);

        if (!mortalidades) {
            return res.status(404).send({
                status: 404,
                message: "Aviário não encontrado",
                data: null
            })
        }

        mortalidades.cicloId = data.cicloId;
        mortalidades.loteId = data.loteId;
        mortalidades.aviarioId = data.aviarioId;
        mortalidades.dataMorte = data.dataMorte;
        mortalidades.causaMorte = data.causaMorte;
        mortalidades.outraCausa = data.outraCausa;
        mortalidades.box1Femea = data.box1Femea;
        mortalidades.box2Femea = data.box2Femea;
        mortalidades.box3Femea = data.box3Femea;
        mortalidades.box4Femea = data.box4Femea;
        mortalidades.box1Macho = data.box1Macho;
        mortalidades.box2Macho = data.box2Macho;
        mortalidades.box3Macho = data.box3Macho;
        mortalidades.box4Macho = data.box4Macho;
        mortalidades.totalFemeas = data.totalFemeas;
        mortalidades.totalMachos = data.totalFemeas;
        mortalidades.totalAves = data.totalAves;

        await mortalidades.save();
        return res.status(200).send({
            status: 200,
            message: "Aviário editado com sucesso",
            data: mortalidades
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const DeleteMortalidade = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idMortalidade } = req.body;

        const mortalidades = await Mortalidade.findByPk(idMortalidade);

        if (!mortalidades) {
            return res.status(404).send({
                status: 404,
                message: "Aviário não encontrado",
                data: null
            })
        }

        await mortalidades.destroy();
        return res.status(200).send({
            status: 200,
            message: "Aviário deletado com sucesso",
            data: mortalidades
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

export default { GetMortalidade, GetMortalidadeById, GetMortalidadeSearch, CreateMortalidade, UpdateMortalidade, DeleteMortalidade };