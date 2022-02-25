const { User } = require('../models');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getUsers = async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
}

exports.getOneUser = async (req, res) => {
    const users = await User.findByPk(req.params.userId);
    res.status(200).json(users)
};

exports.postUser = async (req, res) => {

    const results = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (results) {
        return res.status(409).send({ message: 'User already registered!' });
    }

    const { name, email, password, active } = req.body;
    const newUser = await User.create({ name, email, password, active });
    res.status(200).json({ message: 'Cadastrado com sucesso' })
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

        const user = await User.findOne({ where : {email : req.body.email }});
        if(user){
           const password_valid = await bcrypt.compare(req.body.password,user.password);
           if(password_valid){
               token = jwt.sign({ "userId" : user.userId,"email" : user.email },process.env.JWT_KEY);
               res.status(200).json({ token : token });
           } else {
             res.status(400).json({ error : "Password Incorrect" });
           }
         
         }else{
           res.status(404).json({ error : "User does not exist" });
         }
};