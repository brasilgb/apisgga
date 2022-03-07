const { Pesagem } = require('../models');

exports.getPesagens = async (req, res) => {
    await Pesagem.findAll()
        .then((pesagens) => {
            const response = {
                pesagensNumber: pesagens.length,
                pesagens: pesagens.map((pesagem) => {
                    return {
                        pesagemId: pesagem.pesagemId,
                        loteId: pesagem.loteId,
                        totl_femea: pesagem.totl_femea,
                        totl_macho: pesagem.totl_macho,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados das pesagens cadastradas.",
                            url: process.env.URL_API + 'pesagens/' + pesagem.pesagemId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOnePesagem = async (req, res) => {
    await Pesagem.findByPk(req.params.pesagemId)
        .then((pesagem) => {
            const response = {
                pesagemId: pesagem.pesagemId,
                totl_femea: pesagem.totl_femea,
                totl_macho: pesagem.totl_macho,
                request: {
                    Type: "GET",
                    Description: "Retorna todas as pesagens cadastradas.",
                    url: process.env.URL_API + 'pesagens'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postPesagem = async (req, res) => {
    const {
        cicloId,
        loteId,
        aviarioId,
        data_pesagem,
        semana,
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
    const newPesagem = await Pesagem.create({
        cicloId,
        loteId,
        aviarioId,
        data_pesagem,
        semana,
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
                message: "Pesagem cadastrada com sucesso!",
                lote: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todos as pesagens cadastradas.",
                        url: process.env.URL_API + 'pesagens'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updatePesagem = async (req, res) => {
    const {
        cicloId,
        loteId,
        aviarioId,
        data_pesagem,
        semana,
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

    await Pesagem.update({
        cicloId,
        loteId,
        aviarioId,
        data_pesagem,
        semana,
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
                pesagemId: req.body.pesagemId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Pesagem editada com sucesso.",
                request: {
                    type: "GET",
                    Description: "Retorna todas as pesagens cadastradas.",
                    url: process.env.URL_API + 'pesagens'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deletePesagem = async (req, res) => {
    await Pesagem.destroy({
        where: {
            pesagemId: req.body.pesagemId
        }
    })
        .then(() => {
            const response = {
                message: "Pesagem excluída com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra uma pesagem.",
                    url: process.env.URL_API + 'pesagens'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};