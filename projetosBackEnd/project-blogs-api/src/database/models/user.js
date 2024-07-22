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

/**
 * @param {import('sequelize').Sequelize} Sequelize
*/
module.exports = (sequelize) => {
  const Users = sequelize.define('User', attributes, {
    tableName: 'Users',
    timestamps: false,
  })

  Users.associate = (models) => {
    Users.hasMany(models.BlogPost, {foreignKey: 'id',  as: 'BlogPosts'})}
  return Users;
}