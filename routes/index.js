var express = require('express');
const {index} = require("../controllers/indexController");
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const session = req.session

  console.log(req.session)

  if (!session?.user_id)
    return res.redirect('/auth/login')

  next()
}, index);

module.exports = router;
