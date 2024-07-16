const seedCategories = require('./develop/seeds/category-seeds.js');
const seedProducts = require('./develop/seeds/product-seeds.js');
const seedTags = require('./develop/seeds/tag-seeds.js');
const seedProductTags = require('./develop/seeds/product-tag-seeds.js');

const sequelize = require('../develop/config/connection.js');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
