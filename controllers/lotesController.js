const { Lote } = require('../models');

exports.getLotes = async (req, res) => {
    const lotes = await Lote.findAll();
    res.status(200).json(lotes);
}

exports.getOneLote = async (req, res) => {
    const lotes = await Lote.findByPk(req.params.loteId);
    res.status(200).json(lotes)
};

exports.postLote = async (req, res) => {
    const {
        lote,
        cicloId,
        data_entrada,
        femea,
        macho,
        capi_femea,
        capi_macho
    } = req.body;
    const newLote = await Lote.create({
        lote,
        cicloId,
        data_entrada,
        femea,
        macho,
        capi_femea,
        capi_macho
    });
    res.status(200).json({ message: 'Cadastrado com sucesso' })
};

exports.updateLote = async (req, res) => {
    const {
        lote,
        cicloId,
        data_entrada,
        femea,
        macho,
        capi_femea,
        capi_macho
    } = req.body;

    await Lote.update({
        lote,
        cicloId,
        data_entrada,
        femea,
        macho,
        capi_femea,
        capi_macho
    },
        {
            where: {
                loteId: req.body.loteId
            },
        }
    );
    res.status(200).json({ message: 'Editado com sucesso' })
};

exports.deleteLote = async (req, res) => {
    await Lote.destroy({
        where: {
            loteId: req.body.loteId
        }
    });
    res.status(200).json({ message: 'Excluido com sucesso' })
};