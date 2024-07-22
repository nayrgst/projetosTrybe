const { DataTypes } = require('sequelize')
'use strict';

const atributes = {
  postId: {
    type: DataTypes.INTEGER
  },
  categoryId: {
    type: DataTypes.INTEGER
  },
}
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.createTable('PostCategories', atributes);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};