const { DataTypes } = require('sequelize');
/**
  * @param {import('sequelize').DataTypes} DataTypes
 */

const attributes = {
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

/**
 * @param {import('sequelize').Sequelize} Sequelize
*/
module.exports = (sequelize) => {
  const Category = sequelize.define('Category', attributes, {
    tableName: 'Categories',
    timestamps: false,
  })
  return Category;
}