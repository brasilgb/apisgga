const { Periodo } = require('../models');

exports.getPeriodos = async (req, res) => {
    const periodos = await Periodo.findAll();
    res.status(200).json(periodos);
}

exports.getOnePeriodo = async (req, res) => {
    const periodos = await Periodo.findByPk(req.params.PeriodoId);
    res.status(200).json(periodos)
};

exports.postPeriodo = async (req, res) => {
    const { data_inicial, data_final, semn_inicial, semn_final, ativo } = req.body;
    const newPeriodo = await Periodo.create({ data_inicial, data_final, semn_inicial, semn_final, ativo });
    res.status(200).json({ message: 'Cadastrado com sucesso' })
};

exports.updatePeriodo = async (req, res) => {
    const { name } = req.body;

    await Periodo.update({ name },
        {
            where: {
                PeriodoId: req.body.PeriodoId
            },
        }
    );
    res.status(200).json({ message: 'Editado com sucesso' })
};

exports.deletePeriodo = async (req, res) => {
    await Periodo.destroy({
        where: {
            PeriodoId: req.body.PeriodoId
        }
    });
    res.status(200).json({ message: 'Excluido com sucesso' })
};