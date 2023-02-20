import { Request, Response } from "express";

import Aviario from "../db/models/Aviario";
import Helper from "../helpers/Helper";

const GetAviario = async (req: Request, res: Response): Promise<Response> => {
    try {
        const aviarios = await Aviario.findAll();

        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: aviarios
        });
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const GetAviarioById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idAviario } = req.params;

        const aviarios = await Aviario.findByPk(idAviario);

        if (!aviarios) {
            return res.status(404).send({
                status: 404,
                message: "Data not found",
                data: null
            })
        }

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: aviarios
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const CreateAviario = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { loteId, aviario, dataEntrada, box1Femea, box1Macho, totalFemea, totalMacho } = req.body;

        const create = await Aviario.create({
            loteId: loteId,
            aviario: aviario,
            dataEntrada: dataEntrada,
            box1Femea: box1Femea,
            box1Macho: box1Macho,
            totalFemea: totalFemea,
            totalMacho: totalMacho
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

const UpdateAviario = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idAviario, loteId, aviario, dataEntrada, box1Femea, box1Macho, totalFemea, totalMacho } = req.body;

        const aviarios = await Aviario.findByPk(idAviario);

        if (!aviarios) {
            return res.status(404).send({
                status: 404,
                message: "Data not found",
                data: null
            })
        }

        aviarios.loteId = loteId,
        aviarios.aviario = aviario,
        aviarios.dataEntrada = dataEntrada,
        aviarios.box1Femea = box1Femea,
        aviarios.box1Macho = box1Macho,
        aviarios.totalFemea = totalFemea,
        aviarios.totalMacho = totalMacho

        await aviarios.save();
        return res.status(200).send({
            status: 200,
            message: "ok",
            data: aviarios
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const DeleteAviario = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idAviario } = req.body;

        const aviarios = await Aviario.findByPk(idAviario);

        if (!aviarios) {
            return res.status(404).send({
                status: 404,
                message: "Data not found",
                data: null
            })
        }

        await aviarios.destroy();
        return res.status(200).send({
            status: 200,
            message: "Aviario deleted with success",
            data: aviarios
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

export default { GetAviario, GetAviarioById, CreateAviario, UpdateAviario, DeleteAviario };