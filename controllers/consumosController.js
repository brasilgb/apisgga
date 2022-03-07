const { Consumo } = require('../models');

exports.getConsumos = async (req, res) => {
    await Consumo.findAll()
        .then((consumos) => {
            const response = {
                consumosNumber: consumos.length,
                consumos: consumos.map((consumo) => {
                    return {
                        consumoId: consumo.consumoId,
                        femea: consumo.totl_femea,
                        macho: consumo.totl_macho,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados dos consumos cadastrados.",
                            url: process.env.URL_API + 'consumos/' + consumo.consumoId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneConsumo = async (req, res) => {
    await Consumo.findByPk(req.params.consumoId)
        .then((consumo) => {
            const response = {
                consumoId: consumo.consumoId,
                femea: consumo.totl_femea,
                macho: consumo.totl_macho,
                request: {
                    Type: "GET",
                    Description: "Retorna todos os consumos cadastrados.",
                    url: process.env.URL_API + 'consumos'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postConsumo = async (req, res) => {
    const {
        cicloId,
        loteId,
        aviarioId,
        data_consumo,
        box1_femea,
        box2_femea,
        box3_femea,
        box4_femea,
        box1_macho,
        box2_macho,
        box3_macho,
        box4_macho,
        totl_femea,
        totl_macho
    } = req.body;
    const newConsumo = await Consumo.create({
        cicloId,
        loteId,
        aviarioId,
        data_consumo,
        box1_femea,
        box2_femea,
        box3_femea,
        box4_femea,
        box1_macho,
        box2_macho,
        box3_macho,
        box4_macho,
        totl_femea,
        totl_macho
    })
        .then(() => {
            const response = {
                message: "Consumo cadastrado com sucesso!",
                lote: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todos os consumos cadastrados.",
                        url: process.env.URL_API + 'consumos'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateConsumo = async (req, res) => {
    const {
        cicloId,
        loteId,
        aviarioId,
        data_consumo,
        box1_femea,
        box2_femea,
        box3_femea,
        box4_femea,
        box1_macho,
        box2_macho,
        box3_macho,
        box4_macho,
        totl_femea,
        totl_macho
    } = req.body;

    await Consumo.update({
        cicloId,
        loteId,
        aviarioId,
        data_consumo,
        box1_femea,
        box2_femea,
        box3_femea,
        box4_femea,
        box1_macho,
        box2_macho,
        box3_macho,
        box4_macho,
        totl_femea,
        totl_macho
    },
        {
            where: {
                consumoId: req.body.consumoId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Consumo editado com sucesso.",
                request: {
                    type: "GET",
                    Description: "Retorna todos os consumos cadastrados.",
                    url: process.env.URL_API + 'consumos'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteConsumo = async (req, res) => {
    await Consumo.destroy({
        where: {
            consumoId: req.body.consumoId
        }
    })
        .then(() => {
            const response = {
                message: "Consumo excluído com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra um consumo.",
                    url: process.env.URL_API + 'consumos'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};