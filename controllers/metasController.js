const { Meta } = require('../models');

exports.getMetas = async (req, res) => {
    const Metas = await Meta.findAll();
    res.status(200).json(Metas);
}

exports.getOneMeta = async (req, res) => {
    const Metas = await Meta.findByPk(req.params.metaId);
    res.status(200).json(Metas)
};

exports.postMeta = async (req, res) => {
    const {
        periodoId,
        tipo_periodo,
        desc_periodo,
        tipo_meta,
        valor_meta,
        data_inicial,
        data_final
    } = req.body;
    const newMeta = await Meta.create({
        periodoId,
        tipo_periodo,
        desc_periodo,
        tipo_meta,
        valor_meta,
        data_inicial,
        data_final
    });
    res.status(200).json({ message: 'Cadastrado com sucesso' })
};

exports.updateMeta = async (req, res) => {
    const {
        periodoId,
        tipo_periodo,
        desc_periodo,
        tipo_meta,
        valor_meta,
        data_inicial,
        data_final
    } = req.body;

    await Meta.update({
        periodoId,
        tipo_periodo,
        desc_periodo,
        tipo_meta,
        valor_meta,
        data_inicial,
        data_final
    },
        {
            where: {
                metaId: req.body.metaId
            },
        }
    );
    res.status(200).json({ message: 'Editado com sucesso' })
};

exports.deleteMeta = async (req, res) => {
    await Meta.destroy({
        where: {
            metaId: req.body.metaId
        }
    });
    res.status(200).json({ message: 'Excluido com sucesso' })
};