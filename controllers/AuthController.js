const bcrypt = require('bcrypt')
const { User } = require('../models')
const {validationResult} = require("express-validator");

const index = (req, res, next) => {
  res.render('pages/login');
}

const authenticate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password} = req.body

  const user = await User.findOne({
    where: {email}
  })

  try{
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        const session = req.session
        session.user_id = user.id

        return res.redirect('/')
      }

      return res.status(401).json({ message: "Invalid Credentials" });
    });
  } catch (err) {
    res.status(401).send(err.message);
  }
}

module.exports = {
  index,
  authenticate
}
