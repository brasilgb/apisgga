const { Recebimento } = require('../models');

exports.getRecebimentos = async (req, res) => {
    await Recebimento.findAll()
        .then((recebimentos) => {
            const response = {
                recebimentosNumber: recebimentos.length,
                recebimentos: recebimentos.map((recebimento) => {
                    return {
                        recebimentoId: recebimento.recebimentoId,
                        femea: recebimento.femea,
                        macho: recebimento.macho,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados dos recebimentos cadastrados.",
                            url: process.env.URL_API + 'recebimentos/' + recebimento.recebimentoId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneRecebimento = async (req, res) => {
    await Recebimento.findByPk(req.params.recebimentoId)
        .then((recebimento) => {
            const response = {
                recebimentoId: recebimento.recebimentoId,
                femea: recebimento.femea,
                macho: recebimento.macho,
                request: {
                    Type: "GET",
                    Description: "Retorna todos os recebimentos cadastrados.",
                    url: process.env.URL_API + 'recebimentos'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postRecebimento = async (req, res) => {
    const {
        cicloId,
        data_recebimento,
        femea,
        macho,
        nota_fiscal
    } = req.body;
    await Recebimento.create({
        cicloId,
        data_recebimento,
        femea,
        macho,
        nota_fiscal
    })
        .then(() => {
            const response = {
                message: "Recebimento cadastrado com sucesso!",
                lote: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todos os recebimentos cadastrados.",
                        url: process.env.URL_API + 'recebimentos'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateRecebimento = async (req, res) => {
    const {
        cicloId,
        data_recebimento,
        femea,
        macho,
        nota_fiscal
    } = req.body;

    await Recebimento.update({
        cicloId,
        data_recebimento,
        femea,
        macho,
        nota_fiscal
    },
        {
            where: {
                recebimentoId: req.body.recebimentoId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Recebimento editado com sucesso.",
                request: {
                    type: "GET",
                    Description: "Retorna todos as recebimentos cadastrados.",
                    url: process.env.URL_API + 'recebimentos'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteRecebimento = async (req, res) => {
    await Recebimento.destroy({
        where: {
            recebimentoId: req.body.recebimentoId
        }
    })
        .then(() => {
            const response = {
                message: "Recebimento excluído com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra um recebimento.",
                    url: process.env.URL_API + 'recebimentos'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};