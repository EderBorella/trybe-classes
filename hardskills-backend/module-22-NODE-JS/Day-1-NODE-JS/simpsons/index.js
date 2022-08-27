const simpson = require('./simpson.json')

const main = (n, simpson) => {
  const promise = new Promise((resolve, reject) => {
    if (n > 9 || n < 0)
      reject(new Error('Simpson não listado'));

    const resultado = `${simpson[n].id} - ${simpson[n].name}`
    resolve(resultado);
  });
  return promise;
}

const doSomething = async () => {
  console.log(await main(3, simpson));
}

doSomething();