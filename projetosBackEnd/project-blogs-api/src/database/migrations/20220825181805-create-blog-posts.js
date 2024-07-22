const { DataTypes} = require('sequelize');
'use strict';

const atributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.STRING
  },
  userId: {
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
  published: {
    type: DataTypes.DATE
  },
  updated: {
    type: DataTypes.DATE
  }
}

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.createTable('BlogPosts', atributes );
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};