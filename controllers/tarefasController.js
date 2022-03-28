const { Tarefa } = require('../models');

exports.getTarefas = async (req, res) => {
    await Tarefa.findAll()
        .then((tarefas) => {
            const response = {
                tarefasNumber: tarefas.length,
                tarefas: tarefas.map((tarefa) => {
                    return {
                        tarefaId: tarefa.tarefaId,
                        titulo: tarefa.titulo,
                        descricao: tarefa.descricao,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados dos tarefas cadastradas.",
                            url: process.env.URL_API + 'tarefas/' + tarefa.tarefaId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneTarefa = async (req, res) => {
    await Tarefa.findByPk(req.params.tarefaId)
        .then((tarefa) => {
            const response = {
                tarefaId: tarefa.tarefaId,
                titulo: tarefa.titulo,
                descricao: tarefa.descricao,
                request: {
                    Type: "GET",
                    Description: "Retorna todas as tarefas cadastradas.",
                    url: process.env.URL_API + 'tarefas'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postTarefa = async (req, res) => {
    const {
        cicloId,
        data_inicial,
        data_previsao,
        data_termino,
        titulo,
        descricao,
        situacao,
        observacao
    } = req.body;
    await Tarefa.create({
        cicloId,
        data_inicial,
        data_previsao,
        data_termino,
        titulo,
        descricao,
        situacao,
        observacao
    })
        .then(() => {
            const response = {
                message: "Tarefa cadastrado com sucesso!",
                lote: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todas as tarefas cadastradas.",
                        url: process.env.URL_API + 'tarefas'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateTarefa = async (req, res) => {
    const {
        cicloId,
        data_inicial,
        data_previsao,
        data_termino,
        titulo,
        descricao,
        situacao,
        observacao
    } = req.body;

    await Tarefa.update({
        cicloId,
        data_inicial,
        data_previsao,
        data_termino,
        titulo,
        descricao,
        situacao,
        observacao
    },
        {
            where: {
                tarefaId: req.body.tarefaId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Tarefa editada com sucesso.",
                request: {
                    type: "GET",
                    Description: "Retorna todas as tarefas cadastradas.",
                    url: process.env.URL_API + 'tarefas'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteTarefa = async (req, res) => {
    await Tarefa.destroy({
        where: {
            tarefaId: req.body.tarefaId
        }
    })
        .then(() => {
            const response = {
                message: "Tarefa excluída com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra um tarefa.",
                    url: process.env.URL_API + 'tarefas'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};