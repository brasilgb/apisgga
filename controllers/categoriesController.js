const { Category } = require('../models');

exports.getCategories = async (req, res) => {
    const categories = await Category.findAll();
    res.status(200).json(categories);
}

exports.getOneCategory = async (req, res) => {
    const categories = await Category.findByPk(req.params.categoryId);
    res.status(200).json(categories)
};

exports.postCategory = async (req, res) => {
    const { name, price } = req.body;
    const newCategory = await Category.create({ name, price });
    res.status(200).json({ message: 'Cadastrado com sucesso' })
};

exports.updateCategory = async (req, res) => {
    const { name } = req.body;

    await Category.update({ name },
        {
            where: {
                categoryId: req.body.categoryId
            },
        }
    );
    res.status(200).json({ message: 'Editado com sucesso' })
};

exports.deleteCategory = async (req, res) => {
    await Category.destroy({
        where: {
            categoryId: req.body.categoryId
        }
    });
    res.status(200).json({ message: 'Excluido com sucesso' })
};