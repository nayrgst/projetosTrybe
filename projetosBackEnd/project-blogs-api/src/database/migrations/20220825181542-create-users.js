const { DataTypes } = require('sequelize');
'use strict';

const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  displayName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING
  },
}

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.createTable('Users', attributes);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};