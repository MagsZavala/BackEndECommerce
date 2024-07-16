// import models
const Product = require('./develop/models/Product.js');
const Category = require('./develop/models/Category.js');
const Tag = require('./develop/models/Tag.js');
const ProductTag = require('./develop/models/ProductTag.js');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
