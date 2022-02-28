const { User } = require('../models');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getUsers = async (req, res) => {
    await User.findAll()
        .then((users) => {
            const response = {
                usersNumber: users.length,
                users: users.map((user) => {
                    return {
                        userId: user.userId,
                        name: user.name,
                        request: {
                            Type: "GET",
                            Description: "Retorna dados dos usuários cadastrados.",
                            url: process.env.URL_API + 'users/' + user.userId
                        }
                    }
                }),
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.getOneUser = async (req, res) => {
    await User.findByPk(req.params.userId)
        .then((user) => {
            const response = {
                    userId: user.userId,
                    name: user.name,
                    request: {
                        Type: "GET",
                        Description: "Retorna todos os usuários cadastrados.",
                        url: process.env.URL_API + 'users'
                    }
            }
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json(err)
        });

};

exports.postUser = async (req, res) => {

    const results = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (results) {
        return res.status(409).send({ message: "Usuário existe na base de dados!" });
    }

    const { name, email, password, active } = req.body;
    await User.create({ name, email, password, active })
    .then(() => {
        const response = {
            message: "Usuário cadastrado com sucesso!",
            usuário: {
                // userId: '',
                name: req.body.name,
                request: {
                    Type: "GET",
                    Description: "Retorna todos os usuários cadastrados.",
                    url: process.env.URL_API + 'users'
                }
            }
        }
        res.status(200).json(response)
    });
    
};

exports.updateUser = async (req, res) => {
    const { name, email, password, active } = req.body;

    await User.update({ name, email, password, active },
        {
            where: {
                userId: req.body.userId
            },
        }
    );
    res.status(200).json({ message: 'Editado com sucesso' })
};

exports.deleteUser = async (req, res) => {
    await User.destroy({
        where: {
            userId: req.body.userId
        }
    });
    res.status(200).json({ message: 'Excluido com sucesso' })
};


exports.Login = async (req, res, next) => {

    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
        const password_valid = await bcrypt.compare(req.body.password, user.password);
        if (password_valid) {
            token = jwt.sign({ "userId": user.userId, "email": user.email }, process.env.JWT_KEY);
            res.status(200).json({ token: token });
        } else {
            res.status(400).json({ error: "Password Incorrect" });
        }

    } else {
        res.status(404).json({ error: "User does not exist" });
    }
};