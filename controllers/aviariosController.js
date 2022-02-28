const { Aviario, Post } = require('../models');
const sequelize = require("sequelize");
exports.getAviarios = async (req, res) => {
    const aviarios = await Aviario.findAll({
        order: [['name', 'ASC']],
        include: [{
            model: Post,
            attributes: [
                'name',
                [sequelize.literal('(SELECT COUNT(*) FROM Aviarios WHERE Aviarios.postId = Post.postId)'), 'AviarioCount'],
            ],
        }]
    });
    res.status(200).json(aviarios);
}

exports.getOneAviario = async (req, res) => {
    const aviarios = await Aviario.findByPk(req.params.productId);
    res.status(200).json(aviarios)
};

exports.postAviario = async (req, res) => {
    const { 
        postId, 
    } = req.body;
    const newAviario = await Aviario.create({ 
        postId, 
    });
    res.status(200).json({ message: 'Cadastrado com sucesso' })
};

exports.updateAviario = async (req, res) => {
    const { 
        postId, 
    } = req.body;

    await Aviario.update({ 
        postId, 
    },
        {
            where: {
                productId: req.body.productId
            },
        }
    );
    res.status(200).json({ message: 'Editado com sucesso' })
};

exports.deleteAviario = async (req, res) => {
    await Aviario.destroy({
        where: {
            productId: req.body.productId
        }
    });
    res.status(200).json({ message: 'Excluido com sucesso' })
};