import { Request, Response } from "express";
import { resolve } from "path";

import Ciclo from "../db/models/Ciclo";

const GetCiclo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const ciclos = await Ciclo.findAll();

        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: ciclos
        });
    } catch (error: any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            })
        }

        return res.status(500).send({
            status: 500,
            message: "Internal Server error",
            errors: error
        });
    }
};

const GetCicloById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idCiclo } = req.params;
        
        const ciclo = await Ciclo.findByPk(idCiclo);

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
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            })
        }

        return res.status(500).send({
            status: 500,
            message: "Internal Server error",
            errors: error
        });
    }
};

const CreateCiclo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { dataInicial, semanaInicial, ativo } = req.body;
        
        const create = await Ciclo.create({
            "dataInicial": dataInicial,
            "semanaInicial": semanaInicial,
            "ativo": ativo
        });

        return res.status(201).send({
            status: 201,
            message: 'Created with success',
            data: create
        })
    } catch (error: any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            })
        }

        return res.status(500).send({
            status: 500,
            message: "Internal Server error",
            errors: error
        });
    }
};

const UpdateCiclo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idCiclo, dataInicial, semanaInicial, ativo } = req.body;
        
        const ciclo = await Ciclo.findByPk(idCiclo);

        if (!ciclo) {
            return res.status(404).send({
                status: 404,
                message: "Data not found",
                data: null
            })
        }

        ciclo.dataInicial = dataInicial;
        ciclo.semanaInicial = semanaInicial;
        ciclo.ativo = ativo;

        await ciclo.save();
        return res.status(200).send({
            status: 200,
            message: "ok",
            data: ciclo
        });

    } catch (error: any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            })
        }

        return res.status(500).send({
            status: 500,
            message: "Internal Server error",
            errors: error
        });
    }
};

const DeleteCiclo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idCiclo } = req.params;
        
        const ciclo = await Ciclo.findByPk(idCiclo);

        if (!ciclo) {
            return res.status(404).send({
                status: 404,
                message: "Data not found",
                data: null
            })
        }

        await ciclo.destroy();
        return res.status(200).send({
            status: 200,
            message: "Ciclo deleted with success",
            data: ciclo
        });

    } catch (error: any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            })
        }

        return res.status(500).send({
            status: 500,
            message: "Internal Server error",
            errors: error
        });
    }
};

export default { GetCiclo, GetCicloById, CreateCiclo, UpdateCiclo, DeleteCiclo };