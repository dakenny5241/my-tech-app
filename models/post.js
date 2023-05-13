// models/post.js
const { Model, DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const user = require ('../models/user');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

 
module.exports = Post;