const { Despesa } = require('../models');

exports.getDespesas = async (req, res) => {
    await Despesa.findAll()
        .then((despesas) => {
            const response = {
                despesasNumber: despesas.length,
                despesas: despesas.map((despesa) => {
                    return {
                        despesaId: despesa.despesaId,
                        descricao: despesa.descricao,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados das despesas cadastradas.",
                            url: process.env.URL_API + 'despesas/' + despesa.despesaId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneDespesa = async (req, res) => {
    await Despesa.findByPk(req.params.despesaId)
        .then((despesa) => {
            const response = {
                despesaId: despesa.despesaId,
                descricao: despesa.descricao,
                request: {
                    Type: "GET",
                    Description: "Retorna todas as despesas cadastradas.",
                    url: process.env.URL_API + 'despesas'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postDespesa = async (req, res) => {
    const {
        cicloId,
        vencimento,
        descritivo,
        valor,
        situacao,
        observacao
    } = req.body;
    await Despesa.create({
        cicloId,
        vencimento,
        descritivo,
        valor,
        situacao,
        observacao
    })
        .then(() => {
            const response = {
                message: "Despesa cadastrado com sucesso!",
                lote: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todas as despesas cadastradas.",
                        url: process.env.URL_API + 'despesas'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateDespesa = async (req, res) => {
    const {
        cicloId,
        vencimento,
        descritivo,
        valor,
        situacao,
        observacao
    } = req.body;

    await Despesa.update({
        cicloId,
        vencimento,
        descritivo,
        valor,
        situacao,
        observacao
    },
        {
            where: {
                despesaId: req.body.despesaId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Despesa editado com sucesso.",
                request: {
                    type: "GET",
                    Description: "Retorna todas as despesas cadastradas.",
                    url: process.env.URL_API + 'despesas'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteDespesa = async (req, res) => {
    await Despesa.destroy({
        where: {
            despesaId: req.body.despesaId
        }
    })
        .then(() => {
            const response = {
                message: "Despesa excluída com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra uma despesa.",
                    url: process.env.URL_API + 'despesas'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};