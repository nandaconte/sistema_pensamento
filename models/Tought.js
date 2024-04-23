const {DataTypes} = require("sequelize");

const db = require("../db/conn");

const User = db.define("Tought",{
    title:{
        type:DataTypes.STRING,
        allowNull: false,
    },
});

Tought.belongsTo(User);
User.hasMany(Tought);

module.exports = Tought