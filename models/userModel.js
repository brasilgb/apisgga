const bcrypt = require("bcrypt");
const User = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        userId: {
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true,
            field: "userId"
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        active: DataTypes.BOOLEAN
    },
        {
            hooks: {
                beforeCreate: (User) => {
                    const salt = bcrypt.genSaltSync();
                    User.password = bcrypt.hashSync(User.password, salt);
                }
            },
            instanceMethods: {
                validPassword: function (password) {
                    return bcrypt.compareSync(password, this.password);
                }
            }
        }
    );

};


module.exports = User;