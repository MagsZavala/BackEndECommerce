const router = require('express').Router();
const categoryRoutes = require('./Api/category-routes');
const productRoutes = require('./Api/product-routes');
const tagRoutes = require('./Api/tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
