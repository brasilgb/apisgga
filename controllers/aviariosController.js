const { Aviario, Lote } = require('../models');
const sequelize = require("sequelize");

exports.getAviarios = async (req, res) => {
    const aviarios = await Aviario.findAll({
        order: [['aviario', 'ASC']],
        include: [{
            model: Lote,
            attributes: [
                'Lote',
                [sequelize.literal('(SELECT COUNT(*) FROM Aviarios WHERE Aviarios.loteId = Lote.loteId)'), 'Aviarios'],
            ],
        }]
    });
    res.status(200).json(aviarios);
}

exports.getOneAviario = async (req, res) => {
    const aviarios = await Aviario.findByPk(req.params.aviarioId);
    res.status(200).json(aviarios)
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
    });
    res.status(200).json({ message: 'Cadastrado com sucesso' })
};

exports.updateAviario = async (req, res) => {
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
    );
    res.status(200).json({ message: 'Editado com sucesso' })
};

exports.deleteAviario = async (req, res) => {
    await Aviario.destroy({
        where: {
            aviarioId: req.body.aviarioId
        }
    });
    res.status(200).json({ message: 'Excluido com sucesso' })
};