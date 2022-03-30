const { Email } = require('../models');

exports.getEmails = async (req, res) => {
    await Email.findAll()
        .then((emails) => {
            const response = {
                emailsNumber: emails.length,
                emails: emails.map((email) => {
                    return {
                        emailId: email.emailId,
                        servidor: email.servidor,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados dos emails cadastrados.",
                            url: process.env.URL_API + 'emails/' + email.emailId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneEmail = async (req, res) => {
    await Email.findByPk(req.params.emailId)
        .then((email) => {
            const response = {
                emailId: email.emailId,
                servidor: email.servidor,
                request: {
                    Type: "GET",
                    Description: "Retorna todos os emails cadastrados.",
                    url: process.env.URL_API + 'emails'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.postEmail = async (req, res) => {
    const {
        servidor,
        porta,
        seguranca,
        usuario,
        senha,
        remetente,
        destinatario,
        assunto,
        mensagem
    } = req.body;
    await Email.create({
        servidor,
        porta,
        seguranca,
        usuario,
        senha,
        remetente,
        destinatario,
        assunto,
        mensagem
    })
        .then(() => {
            const response = {
                message: "Email cadastrado com sucesso!",
                lote: {
                    request: {
                        Type: "GET",
                        Description: "Retorna todos os emails cadastrados.",
                        url: process.env.URL_API + 'emails'
                    }
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.updateEmail = async (req, res) => {
    const {
        servidor,
        porta,
        seguranca,
        usuario,
        senha,
        remetente,
        destinatario,
        assunto,
        mensagem
    } = req.body;

    await Email.update({
        servidor,
        porta,
        seguranca,
        usuario,
        senha,
        remetente,
        destinatario,
        assunto,
        mensagem
    },
        {
            where: {
                emailId: req.body.emailId
            },
        }
    )
        .then(() => {
            const response = {
                message: "Email editado com sucesso.",
                request: {
                    type: "GET",
                    Description: "Retorna todos os emails cadastrados.",
                    url: process.env.URL_API + 'emails'
                }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
};

exports.deleteEmail = async (req, res) => {
    await Email.destroy({
        where: {
            emailId: req.body.emailId
        }
    })
        .then(() => {
            const response = {
                message: "Email excluído com sucesso.",
                request: {
                    type: "POST",
                    Description: "Cadastra um email.",
                    url: process.env.URL_API + 'emails'
                }
            };
            res.status(200).json(response)
        }).catch((err) => {
            res.status(200).json(err)
        });
};