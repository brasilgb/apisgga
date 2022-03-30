const { Controle } = require('../models');

exports.getControles = async (req, res) => {
    await Controle.findAll()
        .then((controles) => {
            const response = {
                controlesNumber: controles.length,
                controles: controles.map((controle) => {
                    return {
                        controleId: controle.controleId,
                        titulo: controle.titulo,
                        descricao: controle.descricao,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados dos controles cadastrados.",
                            url: process.env.URL_API + 'controles/' + controle.controleId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneControle = async (req, res) => {
    await Controle.findByPk(req.params.controleId)
        .then((controle) => {
            const response = {
                controleId: controle.controleId,
                titulo: controle.titulo,
                descricao: controle.descricao,
                request: {
                    Type: "GET",
                    Description: "Retorna todos os controles cadastrados.",
                    url: process.env.URL_API + 'controles'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postControle = async (req, res) => {
    const {
        cicloId,
        aviarioId,
        data_controle,
        temp_max,
        temp_min,
        umidade,
        leit_agua,
        cons_total,
        cons_ave,
        leit_inicial
    } = req.body;
    await Controle.create({
        cicloId,
        aviarioId,
        data_controle,
        temp_max,
        temp_min,
        umidade,
        leit_agua,
        cons_total,
        cons_ave,
        leit_inicial
    })
        .then(() => {
            const response = {
                message: "Controle cadastrado com sucesso!",
                lote: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todos os controles cadastrados.",
                        url: process.env.URL_API + 'controles'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateControle = async (req, res) => {
    const {
        cicloId,
        aviarioId,
        data_controle,
        temp_max,
        temp_min,
        umidade,
        leit_agua,
        cons_total,
        cons_ave,
        leit_inicial
    } = req.body;

    await Controle.update({
        cicloId,
        aviarioId,
        data_controle,
        temp_max,
        temp_min,
        umidade,
        leit_agua,
        cons_total,
        cons_ave,
        leit_inicial
    },
        {
            where: {
                controleId: req.body.controleId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Controle editado com sucesso.",
                request: {
                    type: "GET",
                    Description: "Retorna todos os controles cadastrados.",
                    url: process.env.URL_API + 'controles'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteControle = async (req, res) => {
    await Controle.destroy({
        where: {
            controleId: req.body.controleId
        }
    })
        .then(() => {
            const response = {
                message: "Controle excluído com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra um controle.",
                    url: process.env.URL_API + 'controles'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};