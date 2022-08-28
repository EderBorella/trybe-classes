const descriptionValidator = (req, res, next) => {
  const { rating, difficulty } = req.body.description;

  if (rating < 1 || rating > 5) {
    return res.status(400)
      .json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
  }
  if (!Number.isInteger(rating)) {
    return res.status(400)
      .json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
  }
  switch (difficulty) {
    case 'Fácil':
      return next();
    case 'Médio':
      return next();
    case 'Difícil':
      return next();
    default:
      return res.status(400)
        .json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  }
}

module.exports = descriptionValidator;