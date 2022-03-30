const { Entrada } = require('../models');

exports.getEntradas = async (req, res) => {
    await Entrada.findAll()
        .then((entradas) => {
            const response = {
                entradasNumber: entradas.length,
                entradas: entradas.map((entrada) => {
                    return {
                        entradaId: entrada.entradaId,
                        descricao: entrada.descricao,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados das entradas cadastradas.",
                            url: process.env.URL_API + 'entradas/' + entrada.entradaId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneEntrada = async (req, res) => {
    await Entrada.findByPk(req.params.entradaId)
        .then((entrada) => {
            const response = {
                entradaId: entrada.entradaId,
                descricao: entrada.descricao,
                request: {
                    Type: "GET",
                    Description: "Retorna todas as entradas cadastradas.",
                    url: process.env.URL_API + 'entradas'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postEntrada = async (req, res) => {
    const {
        cicloId,
        data_entrada,
        descritivo,
        valor,
        observacao
    } = req.body;
    await Entrada.create({
        cicloId,
        data_entrada,
        descritivo,
        valor,
        observacao
    })
        .then(() => {
            const response = {
                message: "Entrada cadastrado com sucesso!",
                lote: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todas as entradas cadastradas.",
                        url: process.env.URL_API + 'entradas'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateEntrada = async (req, res) => {
    const {
        cicloId,
        data_entrada,
        descritivo,
        valor,
        observacao
    } = req.body;

    await Entrada.update({
        cicloId,
        data_entrada,
        descritivo,
        valor,
        observacao
    },
        {
            where: {
                entradaId: req.body.entradaId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Entrada editado com sucesso.",
                request: {
                    type: "GET",
                    Description: "Retorna todas as entradas cadastradas.",
                    url: process.env.URL_API + 'entradas'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteEntrada = async (req, res) => {
    await Entrada.destroy({
        where: {
            entradaId: req.body.entradaId
        }
    })
        .then(() => {
            const response = {
                message: "Entrada excluída com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra uma entrada.",
                    url: process.env.URL_API + 'entradas'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};