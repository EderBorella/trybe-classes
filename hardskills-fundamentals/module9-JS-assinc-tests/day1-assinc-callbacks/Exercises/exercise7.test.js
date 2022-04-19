const { test } = require("@jest/globals");
const DumbFunc = (arg) => {
  return arg.toUpperCase();
}
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Teste se os caracteres são maiusculos.', () => {
  expect(DumbFunc('teste de string')).toBe('TESTE DE STRING');
})