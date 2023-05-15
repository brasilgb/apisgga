import { Request, Response } from "express";

import Envio from "../db/models/Envio";
import Ciclo from "../db/models/Ciclo";
import Helper from "../helpers/Helper";

const GetEnvio = async (req: Request, res: Response): Promise<Response> => {
    try {

        const ciclos = await Ciclo.findAll({
            where: {
                ativo: true
            }
        });

        const envios = await Envio.findAll({
            where: {
                cicloId: ciclos[0]?.idCiclo ? ciclos[0]?.idCiclo : 0
            },
            include: ['ciclos']
        });

        return res.status(200).send({
            status: 200,
            message: 'ok',
            ciclos: ciclos.length > 0 ? true : false,
            data: envios
        });
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const GetEnvioById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idEnvio } = req.params;

        const envios = await Envio.findByPk(idEnvio, { include: ['ciclos'] });

        if (!envios) {
            return res.status(404).send({
                status: 404,
                message: "Dado não encontrado",
                data: null
            })
        }

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: envios
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};
const GetEnvioSearch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { date } = req.body;

        const envios = await Envio.findAll({
            where: {
                dataSearch: date
            },
            include: 'ciclos'
        });

        if (!envios) {
            return res.status(404).send({
                status: 404,
                message: "Lote não encontrado",
                data: null
            })
        }

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: envios
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const CreateEnvio = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { values } = req.body;

        const create = await Envio.create({
            dataEnvio: values.dataEnvio,
            dataSearch: values.dataEnvio,
            cicloId: values.cicloId,
            loteId: values.loteId,
            incubaveis: values.incubaveis,
            comerciais: values.comerciais
        });
 
        return res.status(201).send({
            status: 201,
            message: 'Envio registrado com sucesso',
            data: create
        })

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const UpdateEnvio = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { values } = req.body;

        const envios = await Envio.findByPk(values.idEnvio);

        if (!envios) {
            return res.status(404).send({
                status: 404,
                message: "Envio não encontrado",
                data: null
            })
        }

            envios.dataEnvio = values.dataEnvio,
            envios.dataSearch = values.dataEnvio,
            envios.loteId = values.loteId,
            envios.incubaveis = values.incubaveis,
            envios.comerciais = values.comerciais

        await envios.save();
        return res.status(200).send({
            status: 200,
            message: "Envio alterado com sucesso",
            data: envios
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const DeleteEnvio = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idEnvio } = req.body;

        const envios = await Envio.findByPk(idEnvio);

        if (!envios) {
            return res.status(404).send({
                status: 404,
                message: "Envio não encontrado",
                data: null
            })
        }

        await envios.destroy();
        return res.status(200).send({
            status: 200,
            message: "Envio deletado com sucesso",
            data: envios
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

export default { GetEnvio, GetEnvioById, GetEnvioSearch, CreateEnvio, UpdateEnvio, DeleteEnvio };