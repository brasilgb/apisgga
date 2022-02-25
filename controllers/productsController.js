const { Product, Category } = require('../models');
const sequelize = require("sequelize");
exports.getProducts = async (req, res) => {
    const products = await Product.findAll({
        order: [['name', 'ASC']],
        include: [{
            model: Category,
            attributes: [
                'name',
                [sequelize.literal('(SELECT COUNT(*) FROM Products WHERE Products.categoryId = Category.categoryId)'), 'ProductCount'],
            ],
        }]
    });
    res.status(200).json(products);
}

exports.getOneProduct = async (req, res) => {
    const products = await Product.findByPk(req.params.productId);
    res.status(200).json(products)
};

exports.postProduct = async (req, res) => {
    const { categoryId, name, price } = req.body;
    const newProduct = await Product.create({ categoryId, name, price });
    res.status(200).json({ message: 'Cadastrado com sucesso' })
};

exports.updateProduct = async (req, res) => {
    const { categoryId, name, price } = req.body;

    await Product.update({ categoryId, name, price },
        {
            where: {
                productId: req.body.productId
            },
        }
    );
    res.status(200).json({ message: 'Editado com sucesso' })
};

exports.deleteProduct = async (req, res) => {
    await Product.destroy({
        where: {
            productId: req.body.productId
        }
    });
    res.status(200).json({ message: 'Excluido com sucesso' })
};