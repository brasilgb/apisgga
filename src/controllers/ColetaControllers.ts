import { Request, Response } from "express";
import Ciclo from "../db/models/Ciclo";

import Coleta from "../db/models/Coleta";
import Helper from "../helpers/Helper";

const GetColeta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const coletas = await Coleta.findAll({ include: ['aviarios','lotes'] });

        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: coletas
        });
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const GetColetaById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idColeta } = req.params;

        const coleta = await Coleta.findByPk(idColeta, { include: ['aviarios','lotes'] });

        if (!coleta) {
            return res.status(404).send({
                status: 404,
                message: "Data not found",
                data: null
            })
        }
        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: coleta
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const GetColetaDate = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { date } = req.params;

        const coleta = await Coleta.findAll({
            where: {
                dataSearch: date
            },
            include: ['aviarios', 'lotes']
        });

        if (!coleta) {
            return res.status(404).send({
                status: 404,
                message: "Não foram encontrados dados para esta data",
                data: null
            })
        }
        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: coleta
        });
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const CreateColeta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const ciclos = await Ciclo.findAll({
            where: {
                ativo: true
            }
        });

        const { 
            values
            // cicloId,
            // loteId,
            // aviarioId,
            // coleta,
            // dataColeta,
            // limposNinho,
            // sujosNinho,
            // ovosCama,
            // duasGemas,
            // refugos,
            // pequenos,
            // cascaFina,
            // frios,
            // esmagadosQuebrados,
            // camaNaoIncubaveis,
            // deformados,
            // sujosDeCama,
            // trincados,
            // eliminados,
            // incubaveisBons,
            // incubaveis,
            // comerciais,
            // posturaDia
         } = req.body;
         
        const create = await Coleta.create({
            "cicloId":              ciclos[0].idCiclo,
            "loteId":               values.loteId,
            "aviarioId":            values.aviarioId,
            "coleta":               values.coleta,
            "dataColeta":           values.dataColeta,
            "dataSearch":           values.dataColeta,
            "limposNinho":          values.limposNinho,
            "sujosNinho":           values.sujosNinho,
            "ovosCama":             values.ovosCama,
            "duasGemas":            values.duasGemas,
            "refugos":              values.refugos,
            "pequenos":             values.pequenos,
            "cascaFina":            values.cascaFina,
            "frios":                values.frios,
            "esmagadosQuebrados":   values.esmagadosQuebrados,
            "camaNaoIncubaveis":    values.camaNaoIncubaveis,
            "deformados":           values.deformados,
            "sujosDeCama":          values.sujosDeCama,
            "trincados":            values.trincados,
            "eliminados":           values.eliminados,
            "incubaveisBons":       values.incubaveisBons,
            "incubaveis":           values.incubaveis,
            "comerciais":           values.comerciais,
            "posturaDia":           values.posturaDia
        });


        return res.status(201).send({
            status: 201,
            message: 'Coleta criada com sucesso',
            data: create
        })
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const UpdateColeta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idColeta, dataColeta, semanaInicial, dataFinal, semanaFinal, ativo } = req.body;

        const coleta = await Coleta.findByPk(idColeta);

        if (!coleta) {
            return res.status(404).send({
                status: 404,
                message: "Dados não encontrados para esta data",
                data: null
            })
        }
        coleta.dataColeta = dataColeta;

        await coleta.save();
        return res.status(200).send({
            status: 200,
            message: "Coleta alterado com sucesso",
            data: coleta
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

const DeleteColeta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idColeta } = req.body;

        const coleta = await Coleta.findByPk(idColeta);

        if (!coleta) {
            return res.status(404).send({
                status: 404,
                message: "Algo deu errado",
                data: 'null'
            })
        }

        await coleta.destroy();
        return res.status(200).send({
            status: 200,
            message: "Coleta deletado com sucesso",
            data: coleta
        });

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, "Internal Server error", error, null));
    }
};

export default { GetColeta, GetColetaById, GetColetaDate, CreateColeta, UpdateColeta, DeleteColeta };