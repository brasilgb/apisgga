const { Aviario } = require('../models');

exports.getAviarios = async (req, res) => {
    await Aviario.findAll({ include: 'lotes' })
        .then((aviarios) => {
            const response = {
                aviariosNumber: aviarios.length,
                aviarios: aviarios.map((aviario) => {
                    return {
                        aviarioId: aviario.aviarioId,
                        loteId: aviario.loteId,
                        lote: aviario.lotes.lote,
                        aviario: aviario.aviario,
                        data_entrada: aviario.data_entrada,
                        box1_femea: aviario.box1_femea,
                        box2_femea: aviario.box2_femea,
                        box3_femea: aviario.box3_femea,
                        box4_femea: aviario.box4_femea,
                        box1_macho: aviario.box1_macho,
                        box2_macho: aviario.box2_macho,
                        box3_macho: aviario.box3_macho,
                        box4_macho: aviario.box4_macho,
                        totl_femea: aviario.totl_femea,
                        totl_macho: aviario.totl_macho,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados dos aviario cadastrados.",
                            url: process.env.URL_API + 'aviarios/' + aviario.aviarioId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneAviario = async (req, res) => {
    await Aviario.findByPk(req.params.aviarioId)
        .then((aviario) => {
            const response = {
                aviarioId: aviario.aviarioId,
                loteId: aviario.loteId,
                aviario: aviario.aviario,
                data_entrada: aviario.data_entrada,
                box1_femea: aviario.box1_femea,
                box2_femea: aviario.box2_femea,
                box3_femea: aviario.box3_femea,
                box4_femea: aviario.box4_femea,
                box1_macho: aviario.box1_macho,
                box2_macho: aviario.box2_macho,
                box3_macho: aviario.box3_macho,
                box4_macho: aviario.box4_macho,
                totl_femea: aviario.totl_femea,
                totl_macho: aviario.totl_macho,
                request: {
                    Type: "GET",
                    Description: "Retorna todos os aviarios cadastrados.",
                    url: process.env.URL_API + 'aviarios'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postAviario = async (req, res) => {
    const {
        cicloId,
        loteId,
        aviario,
        data_entrada,
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
    const newAviario = await Aviario.create({
        cicloId,
        loteId,
        aviario,
        data_entrada,
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
                message: "Aviario cadastrado com sucesso!",
                lote: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todos os aviarios cadastrados.",
                        url: process.env.URL_API + 'aviarios'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateAviario = async (req, res) => {
    const results = await Aviario.findOne({
        include: 'lotes',
        where: {
            aviarioId: req.body.aviarioId
        }
    });

    const {
        cicloId,
        loteId,
        aviario,
        data_entrada,
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

    await Aviario.update({
        cicloId,
        loteId,
        aviario,
        data_entrada,
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
                aviarioId: req.body.aviarioId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Aviário editado com sucesso.",
                lote: results.lotes.lote,
                request: {
                    type: "GET",
                    Description: "Retorna todos os aviarios cadastrados.",
                    url: process.env.URL_API + 'aviarios'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteAviario = async (req, res) => {
    await Aviario.destroy({
        where: {
            aviarioId: req.body.aviarioId
        }
    })
        .then(() => {
            const response = {
                message: "Aviario excluído com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra um aviario.",
                    url: process.env.URL_API + 'aviarios'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};