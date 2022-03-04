const { Coleta } = require('../models');

exports.getColetas = async (req, res) => {
    await Coleta.findAll()
        .then((coletas) => {
            const response = {
                coletasNumber: coletas.length,
                coletas: coletas.map((coleta) => {
                    return {
                        coletaId: coleta.coletaId,
                        aviarioId: coleta.aviarioId,
                        cicloId: coleta.cicloId,
                        coleta: coleta.coleta,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados dos coleta cadastrados.",
                            url: process.env.URL_API + 'coletas/' + coleta.coletaId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneColeta = async (req, res) => {
    await Coleta.findByPk(req.params.coletaId)
        .then((coleta) => {
            const response = {
                coletaId: coleta.coletaId,
                cicloId: coleta.cicloId,
                coleta: coleta.coleta,
                request: {
                    Type: "GET",
                    Description: "Retorna todas as coletas cadastradas.",
                    url: process.env.URL_API + 'coletas'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postColeta = async (req, res) => {
    const {
        cicloId,
        aviarioId,
        coleta,
        data_hora,
        limpos_ninho,
        sujos_ninho,
        ovos_cama,
        duas_gemas,
        refugos,
        pequenos,
        casca_fina,
        frios,
        esmagados_quebrados,
        cama_nao_incubaveis,
        deformados,
        sujos_cama,
        trincados,
        eliminados,
        incubaveis_bons,
        incubaveis,
        comerciais,
        postura_dia
    } = req.body;
    const newColeta = await Coleta.create({
        cicloId,
        aviarioId,
        coleta,
        data_hora,
        limpos_ninho,
        sujos_ninho,
        ovos_cama,
        duas_gemas,
        refugos,
        pequenos,
        casca_fina,
        frios,
        esmagados_quebrados,
        cama_nao_incubaveis,
        deformados,
        sujos_cama,
        trincados,
        eliminados,
        incubaveis_bons,
        incubaveis,
        comerciais,
        postura_dia
    })
        .then(() => {
            const response = {
                message: "Coleta cadastrada com sucesso!",
                coleta: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todas as coletas cadastradas.",
                        url: process.env.URL_API + 'coletas'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateColeta = async (req, res) => {
    const {
        cicloId,
        aviarioId,
        coleta,
        data_hora,
        limpos_ninho,
        sujos_ninho,
        ovos_cama,
        duas_gemas,
        refugos,
        pequenos,
        casca_fina,
        frios,
        esmagados_quebrados,
        cama_nao_incubaveis,
        deformados,
        sujos_cama,
        trincados,
        eliminados,
        incubaveis_bons,
        incubaveis,
        comerciais,
        postura_dia
    } = req.body;

    await Coleta.update({
        cicloId,
        aviarioId,
        coleta,
        data_hora,
        limpos_ninho,
        sujos_ninho,
        ovos_cama,
        duas_gemas,
        refugos,
        pequenos,
        casca_fina,
        frios,
        esmagados_quebrados,
        cama_nao_incubaveis,
        deformados,
        sujos_cama,
        trincados,
        eliminados,
        incubaveis_bons,
        incubaveis,
        comerciais,
        postura_dia
    },
        {
            where: {
                coletaId: req.body.coletaId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Coleta editada com sucesso.",
                request: {
                    type: "GET",
                    Description: "Retorna todos as coletas cadastradas.",
                    url: process.env.URL_API + 'coletas'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteColeta = async (req, res) => {
    await Coleta.destroy({
        where: {
            coletaId: req.body.coletaId
        }
    })
        .then(() => {
            const response = {
                message: "Coleta excluída com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra uma coleta.",
                    url: process.env.URL_API + 'coletas'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};