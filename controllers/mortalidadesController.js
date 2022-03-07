const { Mortalidade } = require('../models');

exports.getMortalidades = async (req, res) => {
    await Mortalidade.findAll()
        .then((mortalidades) => {
            const response = {
                mortalidadesNumber: mortalidades.length,
                mortalidades: mortalidades.map((mortalidade) => {
                    return {
                        mortalidadeId: mortalidade.mortalidadeId,
                        loteId: mortalidade.loteId,
                        totl_femea: mortalidade.totl_femea,
                        totl_macho: mortalidade.totl_macho,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados das mortalidade cadastradas.",
                            url: process.env.URL_API + 'mortalidades/' + mortalidade.mortalidadeId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneMortalidade = async (req, res) => {
    await Mortalidade.findByPk(req.params.mortalidadeId)
        .then((mortalidade) => {
            const response = {
                mortalidadeId: mortalidade.mortalidadeId,
                totl_femea: mortalidade.totl_femea,
                totl_macho: mortalidade.totl_macho,
                request: {
                    Type: "GET",
                    Description: "Retorna todas as mortalidades cadastradas.",
                    url: process.env.URL_API + 'mortalidades'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postMortalidade = async (req, res) => {
    const {
        cicloId,
        loteId,
        aviarioId,
        data_mortalidade,
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
    const newMortalidade = await Mortalidade.create({
        cicloId,
        loteId,
        aviarioId,
        data_mortalidade,
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
                message: "Mortalidade cadastrada com sucesso!",
                lote: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todos as mortalidades cadastradas.",
                        url: process.env.URL_API + 'mortalidades'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateMortalidade = async (req, res) => {
    const {
        cicloId,
        loteId,
        aviarioId,
        data_mortalidade,
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

    await Mortalidade.update({
        cicloId,
        loteId,
        aviarioId,
        data_mortalidade,
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
                mortalidadeId: req.body.mortalidadeId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Mortalidade editada com sucesso.",
                request: {
                    type: "GET",
                    Description: "Retorna todas as mortalidades cadastradas.",
                    url: process.env.URL_API + 'mortalidades'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteMortalidade = async (req, res) => {
    await Mortalidade.destroy({
        where: {
            mortalidadeId: req.body.mortalidadeId
        }
    })
        .then(() => {
            const response = {
                message: "Mortalidade excluída com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra uma mortalidade.",
                    url: process.env.URL_API + 'mortalidades'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};