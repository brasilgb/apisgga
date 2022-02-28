const { Ciclo } = require('../models');

exports.getCiclos = async (req, res) => {
    const ciclos = await Ciclo.findAll();
    res.status(200).json(ciclos);
}

exports.getOneCiclo = async (req, res) => {
    const ciclos = await Ciclo.findByPk(req.params.cicloId);
    res.status(200).json(ciclos)
};

exports.postCiclo = async (req, res) => {
    const { data_inicial, semn_inicial } = req.body;
    const newCiclo = await Ciclo.create({ data_inicial, semn_inicial });
    res.status(200).json({ message: 'Cadastrado com sucesso' })
};

exports.updateCiclo = async (req, res) => {
    const { data_inicial, data_final, semn_inicial, semn_final, ativo } = req.body;

    await Ciclo.update({ data_inicial, data_final, semn_inicial, semn_final, ativo },
        {
            where: {
                cicloId: req.body.cicloId
            },
        }
    );
    res.status(200).json({ message: 'Editado com sucesso' })
};

exports.deleteCiclo = async (req, res) => {
    await Ciclo.destroy({
        where: {
            cicloId: req.body.cicloId
        }
    });
    res.status(200).json({ message: 'Excluido com sucesso' })
};