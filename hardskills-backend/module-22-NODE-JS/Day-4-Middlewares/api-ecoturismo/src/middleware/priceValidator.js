const priceValidator = (req, res, next) => {
  const { price } = req.body;

  if ('price' in req.body !== true) {
    console.log(req.body);
    return res.status(400).json({ "message": "O campo price é obrigatório" });
  } else if (price < 0) {
    return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" })
  } else { return next() };
}

module.exports = priceValidator;