import { Request, Response } from "express";

import Meta from "../db/models/Meta";
import Helper from "../helpers/Helper";
import Ciclo from "../db/models/Ciclo";

const GetMeta = async (req: Request, res: Response): Promise<Response> => {
    try {

        const ciclos = await Ciclo.findAll({
            where: {
                ativo: true
            }
        });

        const metas = await Meta.findAll({
            where: {
                cicloId: ciclos ? ciclos[0]?.idCiclo : 0
            }
        });

        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: metas
        });
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const GetMetaById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idMeta } = req.params;

        const metas = await Meta.findByPk(idMeta);

        if (!metas) {
            return res.status(404).send({
                status: 404,
                message: "Data not found",
                data: null
            })
        }

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: metas
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const CreateMeta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { data } = req.body;

        const create = await Meta.findOrCreate({
            where: {
                semana: data.semana,
            },
            defaults: {
                cicloId: data.cicloId,
                semana: data.semana,
                dataInicial: data.dataInicial,
                dataFinal: data.dataFinal,
            }
        });

        return res.status(201).send({
            status: 201,
            message: 'Created with success',
            data: create
        })

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const UpdateMeta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idMeta, semana, dataInicial } = req.body;

        const metas = await Meta.findByPk(idMeta);

        if (!metas) {
            return res.status(404).send({
                status: 404,
                message: "Data not found",
                data: null
            })
        }

        metas.semana = semana;
        metas.dataInicial = dataInicial;

        await metas.save();
        return res.status(200).send({
            status: 200,
            message: "ok",
            data: metas
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const DeleteMeta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idMeta } = req.body;

        const metas = await Meta.findByPk(idMeta);

        if (!metas) {
            return res.status(404).send({
                status: 404,
                message: "Data not found",
                data: null
            })
        }

        await metas.destroy();
        return res.status(200).send({
            status: 200,
            message: "Meta deleted with success",
            data: metas
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

export default { GetMeta, GetMetaById, CreateMeta, UpdateMeta, DeleteMeta };