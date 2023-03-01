import { Request, Response } from "express";

import Aviario from "../db/models/Aviario";
import Lote from "../db/models/Lote";
import Helper from "../helpers/Helper";

const GetAviario = async (req: Request, res: Response): Promise<Response> => {
    try {
        const aviarios = await Aviario.findAll({ include: ['lotes'] });

        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: aviarios
                .map((av: any, iav: any) => (
                    {
                        idAviario: av.idAviario,
                        loteId: av.loteId,
                        lote: av.lotes.lote,
                        aviario: av.aviario,
                        dataEntrada: av.dataEntrada,
                        box1Femea: av.box1Femea,
                        box2Femea: av.box2Femea,
                        box3Femea: av.box3Femea,
                        box4Femea: av.box4Femea,
                        box1Macho: av.box1Macho,
                        box2Macho: av.box2Macho,
                        box3Macho: av.box3Macho,
                        box4Macho: av.box4Macho,
                        totalFemeas: av.box1Femea + av.box2Femea + av.box3Femea + av.box4Femea,
                        totalMachos: av.box1Macho + av.box2Macho + av.box3Macho + av.box4Macho,
                        totalAves: (av.box1Femea + av.box2Femea + av.box3Femea + av.box4Femea) + (av.box1Macho + av.box2Macho + av.box3Macho + av.box4Macho)
                    }
                ))
        });
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const GetAviarioById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idAviario } = req.params;

        const aviarios = await Aviario.findByPk(idAviario, { include: ['lotes'] });

        if (!aviarios) {
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
                idAviario: aviarios.idAviario,
                loteId: aviarios.loteId,
                aviario: aviarios.aviario,
                dataEntrada: aviarios.dataEntrada,
                box1Femea: aviarios.box1Femea,
                box2Femea: aviarios.box2Femea,
                box3Femea: aviarios.box3Femea,
                box4Femea: aviarios.box4Femea,
                box1Macho: aviarios.box1Macho,
                box2Macho: aviarios.box2Macho,
                box3Macho: aviarios.box3Macho,
                box4Macho: aviarios.box4Macho,
                totalFemeas: aviarios.box1Femea + aviarios.box2Femea + aviarios.box3Femea + aviarios.box4Femea,
                totalMachos: aviarios.box1Macho + aviarios.box2Macho + aviarios.box3Macho + aviarios.box4Macho,
                totalAves: (aviarios.box1Femea + aviarios.box2Femea + aviarios.box3Femea + aviarios.box4Femea) + (aviarios.box1Macho + aviarios.box2Macho + aviarios.box3Macho + aviarios.box4Macho)
            }
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};
const GetAviarioSearch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { lote } = req.body;

        const aviarios = await Aviario.findAll({
            where: {
                loteId: lote
            },
            include: 'lotes'
        });

        if (!aviarios) {
            return res.status(404).send({
                status: 404,
                message: "Lote não encontrado",
                data: null
            })
        }

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: aviarios.map((av: any, iav: any) => (
                {
                    idAviario: av.idAviario,
                    loteId: av.loteId,
                    lote: av.lotes.lote,
                    aviario: av.aviario,
                    dataEntrada: av.dataEntrada,
                    box1Femea: av.box1Femea,
                    box2Femea: av.box2Femea,
                    box3Femea: av.box3Femea,
                    box4Femea: av.box4Femea,
                    box1Macho: av.box1Macho,
                    box2Macho: av.box2Macho,
                    box3Macho: av.box3Macho,
                    box4Macho: av.box4Macho,
                    totalFemeas: av.box1Femea + av.box2Femea + av.box3Femea + av.box4Femea,
                    totalMachos: av.box1Macho + av.box2Macho + av.box3Macho + av.box4Macho,
                    totalAves: (av.box1Femea + av.box2Femea + av.box3Femea + av.box4Femea) + (av.box1Macho + av.box2Macho + av.box3Macho + av.box4Macho)
                }
            ))
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const CreateAviario = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { loteId, aviario, dataEntrada, box1Femea, box2Femea, box3Femea, box4Femea, box1Macho, box2Macho, box3Macho, box4Macho } = req.body;

        const create = await Aviario.create({
            loteId: loteId,
            aviario: aviario,
            dataEntrada: dataEntrada,
            box1Femea: box1Femea,
            box2Femea: box2Femea,
            box3Femea: box3Femea,
            box4Femea: box4Femea,
            box1Macho: box1Macho,
            box2Macho: box2Macho,
            box3Macho: box3Macho,
            box4Macho: box4Macho
        });

        return res.status(201).send({
            status: 201,
            message: 'Aviário criado com sucesso',
            data: create
        })

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const UpdateAviario = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idAviario, loteId, aviario, dataEntrada, box1Femea, box2Femea, box3Femea, box4Femea, box1Macho, box2Macho, box3Macho, box4Macho } = req.body;

        const aviarios = await Aviario.findByPk(idAviario);

        if (!aviarios) {
            return res.status(404).send({
                status: 404,
                message: "Aviário não encontrado",
                data: null
            })
        }

        aviarios.loteId = loteId,
            aviarios.aviario = aviario,
            aviarios.dataEntrada = dataEntrada,
            aviarios.box1Femea = box1Femea,
            aviarios.box2Femea = box2Femea,
            aviarios.box3Femea = box3Femea,
            aviarios.box4Femea = box4Femea,
            aviarios.box1Macho = box1Macho,
            aviarios.box2Macho = box2Macho,
            aviarios.box3Macho = box3Macho,
            aviarios.box4Macho = box4Macho

        await aviarios.save();
        return res.status(200).send({
            status: 200,
            message: "Aviário editado com sucesso",
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
                message: "Aviário não encontrado",
                data: null
            })
        }

        await aviarios.destroy();
        return res.status(200).send({
            status: 200,
            message: "Aviário deletado com sucesso",
            data: aviarios
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

export default { GetAviario, GetAviarioById, GetAviarioSearch, CreateAviario, UpdateAviario, DeleteAviario };