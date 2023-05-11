// models/comment.js
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Comment extends Sequelize.Model {
        static associate(models) {
            Comment.belongsTo(models.User, {
                foreignKey: 'userId',
                onDelete: 'CASCADE',
            });
            Comment.belongsTo(models.Post, {
                foreignKey: 'postId',
                onDelete: 'CASCADE',
            });
        }
    }

};
