// models/comment.js
const Sequelize = require('sequelize');

const comment = sequelize.define('comment', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  postId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = comment;