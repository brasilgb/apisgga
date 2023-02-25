import { Request, Response } from "express";
import { Op } from "sequelize";
import Ciclo from "../db/models/Ciclo";

import Lote from "../db/models/Lote";
import Helper from "../helpers/Helper";

const GetLote = async (req: Request, res: Response): Promise<Response> => {
    try {
        const ciclos = await Ciclo.findAll({
            where: {
                ativo: true
            }
        });

        const lotes = await Lote.findAll({
            where: {
                cicloId: ciclos[0]?.idCiclo ? ciclos[0]?.idCiclo : 0
            },
            include: ['aviarios']
        });

        return res.status(200).send({
            status: 200,
            message: 'ok',
            ciclos: ciclos.length > 0 ? false : true,
            data: lotes,
        });
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const GetLoteById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idLote } = req.params;

        const lote = await Lote.findByPk(idLote, { include: 'aviarios' });

        if (!lote) {
            return res.status(404).send({
                status: 404,
                message: "Data not found",
                data: null
            })
        }
        return res.status(200).send({
            status: 200,
            message: "Ok",
            lote: lote
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const CreateLote = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { cicloId, lote, dataEntrada, femea, macho, dataCapitalizacao, femeaCapitalizada, machoCapitalizado } = req.body;

        const create = await Lote.create({
            cicloId: cicloId,
            lote: lote,
            dataEntrada: dataEntrada,
            femea: femea,
            macho: macho,
            dataCapitalizacao: dataCapitalizacao,
            femeaCapitalizada: femeaCapitalizada,
            machoCapitalizado: machoCapitalizado,
        });

        return res.status(201).send({
            status: 201,
            message: 'Lote criado com sucesso',
            data: create
        })
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const UpdateLote = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idLote, cicloId, lote, dataEntrada, femea, macho, femeaCapitalizada, machoCapitalizado } = req.body;

        const lotes = await Lote.findByPk(idLote);

        if (!lotes) {
            return res.status(404).send({
                status: 404,
                message: "Dados não encontrados para esta data",
                data: null
            })
        }
        lote.cicloId = cicloId;
        lote.lote = lote;
        lote.dataEntrada = dataEntrada;
        lote.femea = femea;
        lote.macho = macho;
        lote.femeaCapitalizada = femeaCapitalizada;
        lote.machoCapitalizado = machoCapitalizado;

        await lote.save();
        return res.status(200).send({
            status: 200,
            message: "Lote alterado com sucesso",
            data: lotes
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const DeleteLote = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idLote } = req.body;

        const lote = await Lote.findByPk(idLote);

        if (!lote) {
            return res.status(404).send({
                status: 404,
                message: "Algo deu errado",
                data: 'null'
            })
        }

        await lote.destroy();
        return res.status(200).send({
            status: 200,
            message: "Lote deletado com sucesso",
            data: lote
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

export default { GetLote, GetLoteById, CreateLote, UpdateLote, DeleteLote };