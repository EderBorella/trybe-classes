const newUserValidator = (req, res, next) => {
  const correctArray = ['email', 'password', 'firstName', 'phone'];
  const arrayKeys = Object.keys(req.body);

  if (JSON.stringify(arrayKeys) !== JSON.stringify(correctArray)) {
    return res.status(400)
      .json({ "message": "Campos ausentes!" });
  } else {
    return next();
  }
}

module.exports = newUserValidator;