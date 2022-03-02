const { Meta } = require('../models');

exports.getMetas = async (req, res) => {
    await Meta.findAll()
        .then((metas) => {
            const response = {
                metasNumber: metas.length,
                metas: metas.map((meta) => {
                    return {
                        metaId: meta.metaId,
                        meta: meta.valor_meta,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados das metas cadastradas.",
                            url: process.env.URL_API + 'metas/' + meta.metaId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneMeta = async (req, res) => {
    await Meta.findByPk(req.params.metaId)
        .then((meta) => {
            const response = {
                metaId: meta.metaId,
                meta: meta.valor_meta,
                request: {
                    Type: "GET",
                    Description: "Retorna todos os metas cadastrados.",
                    url: process.env.URL_API + 'metas'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postMeta = async (req, res) => {
    const {
        cicloId,
        tipo_periodo,
        valor_periodo,
        tipo_meta,
        valor_meta,
        data_inicial,
        data_final
    } = req.body;
    await Meta.create({
        cicloId,
        tipo_periodo,
        valor_periodo,
        tipo_meta,
        valor_meta,
        data_inicial,
        data_final
    })
        .then(() => {
            const response = {
                message: "Meta cadastrada com sucesso!",
                lote: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todos as metas cadastradas.",
                        url: process.env.URL_API + 'metas'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateMeta = async (req, res) => {
    const {
        periodoId,
        tipo_periodo,
        valor_periodo,
        tipo_meta,
        valor_meta,
        data_inicial,
        data_final
    } = req.body;

    await Meta.update({
        periodoId,
        tipo_periodo,
        valor_periodo,
        tipo_meta,
        valor_meta,
        data_inicial,
        data_final
    },
        {
            where: {
                metaId: req.body.metaId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Meta editada com sucesso.",
                request: {
                    type: "GET",
                    Description: "Retorna todos as metas cadastrados.",
                    url: process.env.URL_API + 'metas'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteMeta = async (req, res) => {
    await Meta.destroy({
        where: {
            metaId: req.body.metaId
        }
    })
        .then(() => {
            const response = {
                message: "Meta excluída com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra um meta.",
                    url: process.env.URL_API + 'metas'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};