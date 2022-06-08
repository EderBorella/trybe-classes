// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';
// import userEvent from '@testing-library/user-event';


// test('Verificando se existe o campo Email.', () => {
//   render(<App />);
//   const inputEmail = screen.getByLabelText('Email');

//   expect(inputEmail).toBeInTheDocument();
//   expect(inputEmail).toHaveProperty('type', 'email');
// });
// test('Verificando se existe dois botões.', () => {
//   render(<App />);
//   const buttons = screen.getAllByRole('button');
  
//   expect(buttons).toHaveLength(2);
// });
// test('Verificando o botão enviar existe.', () => {
//   render(<App />);
//   const buttonEnviar = screen.getByTestId('id-send');
  
//   expect(buttonEnviar).toBeInTheDocument();
//   expect(buttonEnviar).toHaveProperty('type', 'button');
//   expect(buttonEnviar).toHaveValue('Enviar');
// });

// test('Verifica se o campo de email e valor estão funcionando,', () => {
//   render(<App />);
  
//   const inputEmail = screen.getByLabelText('Email');
//   const buttonEnviar = screen.getByTestId('id-send');
//   const valor = screen.getByTestId('id-email-user');

//   userEvent.type(inputEmail, 'eder@eder.com');
//   userEvent.click(buttonEnviar);
  
//   expect(inputEmail).toHaveValue('')
//   expect(valor).toHaveTextContent('Valor: eder@eder.com')
// })

// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});