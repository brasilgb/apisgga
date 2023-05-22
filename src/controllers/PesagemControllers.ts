import { Request, Response } from "express";

import Pesagem from "../db/models/Pesagem";
import Ciclo from "../db/models/Ciclo";
import Helper from "../helpers/Helper";

const GetPesagem = async (req: Request, res: Response): Promise<Response> => {
    try {

        const ciclos = await Ciclo.findAll({
            where: {
                ativo: true
            }
        });

        const pesagens = await Pesagem.findAll({
            where: {
                cicloId: ciclos[0]?.idCiclo ? ciclos[0]?.idCiclo : 0
            },
            include: ['lotes', 'aviarios']
        });

        return res.status(200).send({
            status: 200,
            message: 'ok',
            ciclos: ciclos.length > 0 ? false : true,
            data: pesagens
                .map((av: any, iav: any) => (
                    {
                        idPesagem: av.idPesagem,
                        cicloId: av.cicloId,
                        loteId: av.loteId,
                        lote: av.lotes.lote,
                        aviarioId: av.aviarioId,
                        aviario: av.aviarios.aviario,
                        dataPesagem: av.dataPesagem,
                        semana: av.semana,
                        box1Femea: av.box1Femea,
                        box2Femea: av.box2Femea,
                        box3Femea: av.box3Femea,
                        box4Femea: av.box4Femea,
                        box1Macho: av.box1Macho,
                        box2Macho: av.box2Macho,
                        box3Macho: av.box3Macho,
                        box4Macho: av.box4Macho
                    }
                ))
        });
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const GetPesagemById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idPesagem } = req.params;

        const pesagens: any = await Pesagem.findByPk(idPesagem, { include: ['lotes', 'aviarios'] });

        if (!pesagens) {
            return res.status(404).send({
                status: 404,
                message: "Dado não encontrado",
                data: null
            })
        }

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: {
                idPesagem: pesagens.idPesagem,
                cicloId: pesagens.cicloId,
                loteId: pesagens.loteId,
                lote: pesagens.lotes.lote,
                aviarioId: pesagens.aviarioId,
                aviario: pesagens.aviarios.aviario,
                dataPesagem: pesagens.dataPesagem,
                semana: pesagens.semana,
                box1Femea: pesagens.box1Femea,
                box2Femea: pesagens.box2Femea,
                box3Femea: pesagens.box3Femea,
                box4Femea: pesagens.box4Femea,
                box1Macho: pesagens.box1Macho,
                box2Macho: pesagens.box2Macho,
                box3Macho: pesagens.box3Macho,
                box4Macho: pesagens.box4Macho
            }
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};
const GetPesagemSearch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { date } = req.body;

        const pesagens = await Pesagem.findAll({
            where: {
                dataPesagem: date
            },
            include: ['lotes', 'aviarios']
        });

        if (!pesagens) {
            return res.status(404).send({
                status: 404,
                message: "Pesagem não encontrada",
                data: null
            })
        }

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: pesagens.map((av: any, iav: any) => (
                {
                    idPesagem: av.idPesagem,
                    cicloId: av.cicloId,
                    loteId: av.loteId,
                    lote: av.lotes.lote,
                    aviarioId: av.aviarioId,
                    aviario: av.aviarios.aviario,
                    dataPesagem: av.dataPesagem,
                    semana: av.semana,
                    box1Femea: av.box1Femea,
                    box2Femea: av.box2Femea,
                    box3Femea: av.box3Femea,
                    box4Femea: av.box4Femea,
                    box1Macho: av.box1Macho,
                    box2Macho: av.box2Macho,
                    box3Macho: av.box3Macho,
                    box4Macho: av.box4Macho
                }
            ))
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const CreatePesagem = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { data } = req.body;

        const create = await Pesagem.create({
            cicloId: data.cicloId,
            loteId: data.loteId,
            aviarioId: data.aviarioId,
            dataPesagem: data.dataPesagem,
            semana: data.semana,
            box1Femea: data.box1Femea,
            box2Femea: data.box2Femea,
            box3Femea: data.box3Femea,
            box4Femea: data.box4Femea,
            box1Macho: data.box1Macho,
            box2Macho: data.box2Macho,
            box3Macho: data.box3Macho,
            box4Macho: data.box4Macho
        });

        return res.status(201).send({
            status: 201,
            message: 'Pesagem gravada com sucesso',
            data: create
        })

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const UpdatePesagem = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { data } = req.body;

        const pesagens = await Pesagem.findByPk(data.idPesagem);

        if (!pesagens) {
            return res.status(404).send({
                status: 404,
                message: "Pesagem não encontrada",
                data: null
            })
        }

        pesagens.cicloId = data.cicloId,
            pesagens.loteId = data.loteId,
            pesagens.aviarioId = data.aviarioId,
            pesagens.dataPesagem = data.dataPesagem,
            pesagens.semana = data.semana,
            pesagens.box1Femea = data.box1Femea,
            pesagens.box2Femea = data.box2Femea,
            pesagens.box3Femea = data.box3Femea,
            pesagens.box4Femea = data.box4Femea,
            pesagens.box1Macho = data.box1Macho,
            pesagens.box2Macho = data.box2Macho,
            pesagens.box3Macho = data.box3Macho,
            pesagens.box4Macho = data.box4Macho

        await pesagens.save();
        return res.status(200).send({
            status: 200,
            message: "Pesagem editada com sucesso",
            data: pesagens
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const DeletePesagem = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idPesagem } = req.body;

        const pesagens = await Pesagem.findByPk(idPesagem);

        if (!pesagens) {
            return res.status(404).send({
                status: 404,
                message: "Pesagem não encontrada",
                data: null
            })
        }

        await pesagens.destroy();
        return res.status(200).send({
            status: 200,
            message: "Pesagem deletada com sucesso",
            data: pesagens
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

export default { GetPesagem, GetPesagemById, GetPesagemSearch, CreatePesagem, UpdatePesagem, DeletePesagem };