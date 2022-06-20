const Redux = require('redux');

const fazerLogin = (email) => ({
  type: "LOGIN",
  email
});

const inputSenha = (senha) => ({
  type: "SENHA",
  senha
})

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    case "SENHA":
      return {
        ...state,
        senha: action.senha,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));
store.dispatch(inputSenha('123456'));

console.log(store.getState());
