const index = async (req, res) => {
  res.render('pages/index', { title: 'Express' });
}

module.exports = {
  index
}
