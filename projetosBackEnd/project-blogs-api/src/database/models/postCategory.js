const { DataTypes, ForeignKeyConstraintError } = require('sequelize');
/**
  * @param {import('sequelize').DataTypes} DataTypes
 */

const attributes = {
  postId: {
    type: DataTypes.INTEGER
  },
  categoryId: {
    type: DataTypes.INTEGER
  },
}

/**
 * @param {import('sequelize').Sequelize} Sequelize
*/
module.exports = (sequelize) => {
  const postCategory = sequelize.define('PostCategory', attributes, {
    tableName: 'PostCategories',
    timestamps: false,
  })

  postCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
    as: 'BlogPosts',
    ForeignKey: 'postId',
    otherKey: 'categoryId',
    through: postCategory,
    })
    models.BlogPost.belongsToMany(models.Category, {
      as:'categories',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: postCategory,
    })
  }
  return postCategory;
}