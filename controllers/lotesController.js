const { Lote, Aviario } = require('../models');

exports.getLotes = async (req, res) => {
    await Lote.findAll({ include: 'aviarios' })
        .then((lote) => {
            const response = {
                lotesNumber: lote.length,
                lotes: lote.map((lt) => {
                    return {
                        aviariosNumber: lt.aviarios.length,
                        cicloId: lt.cicloId,
                        loteId: lt.loteId,
                        lote: lt.lote,
                        data_entrada: lt.data_entrada,
                        femea: lt.femea,
                        macho: lt.macho,
                        capi_femea: lt.capi_femea,
                        capi_macho: lt.capi_macho,
                        createdAt: lt.createdAt,
                        updatedAt: lt.updatedAt,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados dos lotes cadastrados.",
                            url: process.env.URL_API + 'lotes/' + lt.loteId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneLote = async (req, res) => {
    await Lote.findByPk(req.params.loteId)
        .then((lote) => {
            const response = {
                loteId: lote.loteId,
                lote: lote.lote,
                request: {
                    Type: "GET",
                    Description: "Retorna todos os lotes cadastrados.",
                    url: process.env.URL_API + 'lotes'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postLote = async (req, res) => {
    const results = await Lote.findOne({
        where: {
            lote: req.body.lote
        }
    });

    if (results) {
        return res.status(409).send({ message: "Lote existente na base de dados!" });
    }
    const {
        lote,
        cicloId,
        data_entrada,
        femea,
        macho,
        capi_femea,
        capi_macho
    } = req.body;
    const newLote = await Lote.create({
        lote,
        cicloId,
        data_entrada,
        femea,
        macho,
        capi_femea,
        capi_macho
    })
        .then((newLote) => {
            const response = {
                message: "Lote cadastrado com sucesso!",
                lote: {
                    loteid: newLote.loteId,
                    request: {

                        Type: "GET",
                        Description: "Retorna todos os lotes cadastrados.",
                        url: process.env.URL_API + 'lotes'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateLote = async (req, res) => {
    const results = await Lote.findOne({
        include: 'aviarios',
        where: {
            loteId: req.body.loteId
        }
    });

    const {
        lote,
        cicloId,
        data_entrada,
        femea,
        macho,
        capi_femea,
        capi_macho
    } = req.body;

    await Lote.update({
        lote,
        cicloId,
        data_entrada,
        femea,
        macho,
        capi_femea,
        capi_macho
    },
        {
            where: {
                loteId: req.body.loteId
            },
        }
    )
        .then(() => {

            const response = {
                message: "Lote editado com sucesso.",
                aviarios: results.aviarios.length,
                request: {
                    type: "GET",
                    Description: "Retorna todos os lotes cadastrados.",
                    url: process.env.URL_API + 'lotes'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteLote = async (req, res) => {
    await Lote.destroy({
        where: {
            loteId: req.body.loteId
        }
    })
        .then(() => {
            const response = {
                message: "Lote excluído com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra um lote.",
                    url: process.env.URL_API + 'lotes'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};