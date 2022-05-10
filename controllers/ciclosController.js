const { Ciclo } = require('../models');

exports.getCiclos = async (req, res) => {
    await Ciclo.findAll()
        .then((ciclos) => {
            const response = {
                ciclosNumber: ciclos.length,
                ciclos: ciclos.map((ciclo) => {
                    return {
                        cicloId: ciclo.cicloId,
                        dataInicial: ciclo.data_inicial,
                        dataFinal: ciclo.data_final,
                        semanaInicial: ciclo.semn_inicial,
                        semanaFinal: ciclo.semn_final,
                        ativo: ciclo.ativo,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados dos ciclos cadastrados.",
                            url: process.env.URL_API + 'ciclos/' + ciclo.cicloId
                        }
                    }
                }),
            }
            res.status(200).json(response);
        }).catch((err) => {
            res.status(500).json(err);
        });
}

exports.getOneCiclo = async (req, res) => {
    await Ciclo.findByPk(req.params.cicloId)
        .then((ciclo) => {
            const response = {
                cicloId: ciclo.cicloId,
                dataInicial: ciclo.data_inicial,
                semanaInicial: ciclo.semn_inicial,
                request: {
                    Type: "GET",
                    Description: "Retorna todos os ciclos cadastrados.",
                    url: process.env.URL_API + 'ciclos'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postCiclo = async (req, res) => {
    const { data_inicial, semn_inicial } = req.body;
    await Ciclo.create({ data_inicial, semn_inicial })
    .then(() => {
        const response = {
            message: "Ciclo cadastrado com sucesso!",
            ciclo: {
                request: {
                    Type: "GET",
                    Description: "Retorna todos os ciclos cadastrados.",
                    url: process.env.URL_API + 'ciclos'
                }
            }
        }
        res.status(200).json(response)
    }).catch((err) => {
        res.status(500).json(err)
    });
};

exports.updateCiclo = async (req, res) => {
    const { data_inicial, data_final, semn_inicial, semn_final, ativo } = req.body;
    await Ciclo.update({ data_inicial, data_final, semn_inicial, semn_final, ativo },
        {
            where: {
                cicloId: req.body.cicloId
            },
        }
    ).then(() => {
        const response = {
            message: "Ciclo editado com sucesso.",
            request: {
                type: "GET",
                Description: "Retorna todos os ciclos cadastrados.",
                url: process.env.URL_API + 'ciclos'
            }
        }
        res.status(200).json(response)
    }).catch((err) => {
        res.status(500).json(err)
    });
};

exports.deleteCiclo = async (req, res) => {
    await Ciclo.destroy({
        where: {
            cicloId: req.body.cicloId
        }
    }).then(() => {
        const response = {
            message: "Ciclo excluído com sucesso.",
            request: {
                type: "POST",
                Description: "Cadastra um ciclo.",
                url: process.env.URL_API + 'ciclos'
            }
        };
        res.status(200).json(response)
    }).catch((err) => {
        res.status(200).json(err)
    });
};