const { DataTypes } = require('sequelize')
'use strict';

const atributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING
  },
}
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.createTable('Categories', atributes);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Categories');
  }
};