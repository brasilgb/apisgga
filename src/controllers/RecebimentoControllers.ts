import { Request, Response } from "express";

import Recebimento from "../db/models/Recebimento";
import Ciclo from "../db/models/Ciclo";
import Helper from "../helpers/Helper";

const GetRecebimento = async (req: Request, res: Response): Promise<Response> => {
    try {

        const ciclos = await Ciclo.findAll({
            where: {
                ativo: true
            }
        });

        const recebimentos = await Recebimento.findAll({
            where: {
                cicloId: ciclos[0]?.idCiclo ? ciclos[0]?.idCiclo : 0
            },
            include: 'lotes'
        });

        return res.status(200).send({
            status: 200,
            message: 'ok',
            ciclos: ciclos.length > 0 ? true : false,
            data: recebimentos.map((re: any, ire: any) => (
                {
                    loteId: re.loteId,
                    lote: re.lotes.lote,
                    femea: re.femea,
                    macho: re.macho,
                    notaFiscal: re.notaFiscal,
                    dataRecebimento: re.dataRecebimento
                }
            ))
        });
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const GetRecebimentoById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idRecebimento } = req.params;

        const recebimentos = await Recebimento.findByPk(idRecebimento);

        if (!recebimentos) {
            return res.status(404).send({
                status: 404,
                message: "Dado não encontrado",
                data: null
            })
        }

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: recebimentos
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};
const GetRecebimentoSearch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { date } = req.body;

        const recebimentos = await Recebimento.findAll({
            where: {
                dataSearch: date
            },
            include: 'ciclos'
        });

        if (!recebimentos) {
            return res.status(404).send({
                status: 404,
                message: "Lote não encontrado",
                data: null
            })
        }

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: recebimentos
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const CreateRecebimento = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { values } = req.body;
        const create = await Recebimento.create({
            cicloId: values.cicloId,
            loteId: values.loteId,
            dataSearch: values.dataRecebimento,
            femea: values.femea,
            macho: values.macho,
            notaFiscal: values.notaFiscal,
            dataRecebimento: values.dataRecebimento
        });

        return res.status(201).send({
            status: 201,
            message: 'Recebimento registrado com sucesso',
            data: create
        })

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const UpdateRecebimento = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { values } = req.body;

        const recebimentos = await Recebimento.findByPk(values.idRecebimento);

        if (!recebimentos) {
            return res.status(404).send({
                status: 404,
                message: "Recebimento não encontrado",
                data: null
            })
        }

        recebimentos.dataRecebimento = values.dataRecebimento,
            recebimentos.dataSearch = values.dataRecebimento,
            recebimentos.loteId = values.loteId,
            recebimentos.femea = values.femea,
            recebimentos.macho = values.macho,
            recebimentos.notaFiscal = values.notaFiscal

        await recebimentos.save();
        return res.status(200).send({
            status: 200,
            message: "Recebimento alterado com sucesso",
            data: recebimentos
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const DeleteRecebimento = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idRecebimento } = req.body;

        const recebimentos = await Recebimento.findByPk(idRecebimento);

        if (!recebimentos) {
            return res.status(404).send({
                status: 404,
                message: "Recebimento não encontrado",
                data: null
            })
        }

        await recebimentos.destroy();
        return res.status(200).send({
            status: 200,
            message: "Recebimento deletado com sucesso",
            data: recebimentos
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

export default { GetRecebimento, GetRecebimentoById, GetRecebimentoSearch, CreateRecebimento, UpdateRecebimento, DeleteRecebimento };