const { Empresa } = require('../models');

exports.getEmpresas = async (req, res) => {
    await Empresa.findAll()
        .then((empresas) => {
            const response = {
                empresasNumber: empresas.length,
                empresas: empresas.map((empresa) => {
                    return {
                        empresaId: empresa.empresaId,
                        razao_social: empresa.razao_social,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados das empresas cadastradas.",
                            url: process.env.URL_API + 'empresas/' + empresa.empresaId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneEmpresa = async (req, res) => {
    await Empresa.findByPk(req.params.empresaId)
        .then((empresa) => {
            const response = {
                empresaId: empresa.empresaId,
                razao_social: empresa.razao_social,
                request: {
                    Type: "GET",
                    Description: "Retorna todas as empresas cadastradas.",
                    url: process.env.URL_API + 'empresas'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postEmpresa = async (req, res) => {
    const {
        cnpj,
        razao_social,
        segmento,
        endereco,
        cidade,
        uf,
        telefone,
        celular,
        email
    } = req.body;
    await Empresa.create({
cnpj,
        razao_social,
        segmento,
        endereco,
        cidade,
        uf,
        telefone,
        celular,
        email
    })
        .then(() => {
            const response = {
                message: "Empresa cadastrado com sucesso!",
                lote: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todas as empresas cadastradas.",
                        url: process.env.URL_API + 'empresas'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateEmpresa = async (req, res) => {
    const {
cnpj,
        razao_social,
        segmento,
        endereco,
        cidade,
        uf,
        telefone,
        celular,
        email
    } = req.body;

    await Empresa.update({
cnpj,
        razao_social,
        segmento,
        endereco,
        cidade,
        uf,
        telefone,
        celular,
        email
    },
        {
            where: {
                empresaId: req.body.empresaId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Empresa editada com sucesso.",
                request: {
                    type: "GET",
                    Description: "Retorna todas as empresas cadastradas.",
                    url: process.env.URL_API + 'empresas'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteEmpresa = async (req, res) => {
    await Empresa.destroy({
        where: {
            empresaId: req.body.empresaId
        }
    })
        .then(() => {
            const response = {
                message: "Empresa excluída com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra uma empresa.",
                    url: process.env.URL_API + 'empresas'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};