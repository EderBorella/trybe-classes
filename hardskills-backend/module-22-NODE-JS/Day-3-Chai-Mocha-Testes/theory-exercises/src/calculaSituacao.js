const calculaSituacao = (nota) => {
  if (nota >= 7) {
    return 'aprovação';
  }
  return 'reprovação';
}

module.exports = calculaSituacao;
