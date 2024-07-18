const router = require('express').Router();
const apiRoutes = require('./Api');

router.use('/Api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;