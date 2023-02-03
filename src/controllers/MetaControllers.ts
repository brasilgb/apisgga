import { Request, Response } from "express";

import Meta from "../db/models/Meta";
// import Ciclo from "../db/models/Ciclo";

const GetMeta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const metas = await Meta.findAll();

        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: metas
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

const CreateMeta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { cicloId, semana, dataInicial } = req.body;
        
        const create = await Meta.create({
            "cicloId": cicloId,
            "semana": semana,
            "dataInicial": dataInicial,
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

export default { GetMeta, GetMetaById, CreateMeta, UpdateMeta, DeleteMeta };