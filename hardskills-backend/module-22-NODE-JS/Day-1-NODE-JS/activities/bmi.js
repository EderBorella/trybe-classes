const bmi = (w, h) => {
  let formulae = w / (h * h);
  return formulae.toFixed();
};

module.exports = bmi;