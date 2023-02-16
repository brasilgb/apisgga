import { Request, Response } from "express";

import Ciclo from "../db/models/Ciclo";
import Meta from "../db/models/Meta";
import Helper from "../helpers/Helper";

const GetCiclo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const ciclos = await Ciclo.findAll({ include: ['metas'] });

        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: ciclos
        });
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const GetCicloById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idCiclo } = req.params;

        const ciclo = await Ciclo.findByPk(idCiclo, { include: 'metas' });

        if (!ciclo) {
            return res.status(404).send({
                status: 404,
                message: "Data not found",
                data: null
            })
        }
        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: ciclo
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const GetCicloDate = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { date } = req.params;

        const ciclo = await Ciclo.findAll({
            where: {
                dataInicial: date
            },
            include: 'metas'
        });

        if (!ciclo) {
            return res.status(404).send({
                status: 404,
                message: "Não foram encontrados dados para esta data",
                data: null
            })
        }
        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: ciclo
        });
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const CreateCiclo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { dataInicial, semanaInicial, ativo } = req.body;
        await Ciclo.update({ ativo: false },
            {
                where: {
                    ativo: true
                },
            });
        const create = await Ciclo.create({
            "dataInicial": dataInicial,
            "semanaInicial": semanaInicial,
            "ativo": ativo
        });
        await Meta.create({
            "cicloId": create.idCiclo,
            "semana": semanaInicial,
            "dataInicial": dataInicial,
        });

        return res.status(201).send({
            status: 201,
            message: 'Ciclo criado com sucesso',
            data: create
        })
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const UpdateCiclo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idCiclo, dataInicial, semanaInicial, dataFinal, semanaFinal, ativo } = req.body;

        await Ciclo.update({ ativo: false, dataFinal, semanaFinal },
            {
                where: {
                    ativo: true
                },
            });

        const ciclo = await Ciclo.findByPk(idCiclo);

        if (!ciclo) {
            return res.status(404).send({
                status: 404,
                message: "Dados não encontrados para esta data",
                data: null
            })
        }
        ciclo.dataInicial = dataInicial;
        ciclo.semanaInicial = semanaInicial;
        ciclo.dataFinal = ativo === true ? null : dataFinal;
        ciclo.semanaFinal = ativo === true ? null : semanaFinal;
        ciclo.ativo = ativo;

        await ciclo.save();
        return res.status(200).send({
            status: 200,
            message: "Ciclo alterado com sucesso",
            data: ciclo
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const DeleteCiclo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idCiclo } = req.body;

        const ciclo = await Ciclo.findByPk(idCiclo);

        if (!ciclo) {
            return res.status(404).send({
                status: 404,
                message: "Algo deu errado",
                data: 'null'
            })
        }

        await ciclo.destroy();
        return res.status(200).send({
            status: 200,
            message: "Ciclo deletado com sucesso",
            data: ciclo
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

export default { GetCiclo, GetCicloById, GetCicloDate, CreateCiclo, UpdateCiclo, DeleteCiclo };