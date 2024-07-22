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

/**
 * @param {import('sequelize').Sequelize} Sequelize
*/
module.exports = (sequelize) => {
  const BlogPost = sequelize.define('BlogPost', attributes, {
    tableName: 'BlogPosts',
    timestamps: false
  })

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {foreignKey: 'userId',  as: 'user'})}
  return BlogPost;
}