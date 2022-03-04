const { Envio } = require('../models');

exports.getEnvios = async (req, res) => {
    await Envio.findAll()
        .then((envios) => {
            const response = {
                enviosNumber: envios.length,
                envios: envios.map((envio) => {
                    return {
                        envioId: envio.envioId,
                        cicloId: envio.cicloId,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados dos envios cadastrados.",
                            url: process.env.URL_API + 'envios/' + envio.envioId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneEnvio = async (req, res) => {
    await Envio.findByPk(req.params.envioId)
        .then((envio) => {
            const response = {
                envioId: envio.envioId,
                envio: envio.envio,
                request: {
                    Type: "GET",
                    Description: "Retorna todos os envios cadastrados.",
                    url: process.env.URL_API + 'envios'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postEnvio = async (req, res) => {
    const {
        cicloId,
        data_hora,
        incubaveis,
        comerciais
    } = req.body;
    const newEnvio = await Envio.create({
        cicloId,
        data_hora,
        incubaveis,
        comerciais
    })
        .then(() => {
            const response = {
                message: "Envio cadastrado com sucesso!",
                lote: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todos os envios cadastrados.",
                        url: process.env.URL_API + 'envios'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateEnvio = async (req, res) => {
    const {
        cicloId,
        data_hora,
        incubaveis,
        comerciais
    } = req.body;

    await Envio.update({
        cicloId,
        data_hora,
        incubaveis,
        comerciais
    },
        {
            where: {
                envioId: req.body.envioId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Envio editado com sucesso.",
                request: {
                    type: "GET",
                    Description: "Retorna todos os envios cadastrados.",
                    url: process.env.URL_API + 'envios'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteEnvio = async (req, res) => {
    await Envio.destroy({
        where: {
            envioId: req.body.envioId
        }
    })
        .then(() => {
            const response = {
                message: "Envio excluído com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra um envio.",
                    url: process.env.URL_API + 'envios'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};