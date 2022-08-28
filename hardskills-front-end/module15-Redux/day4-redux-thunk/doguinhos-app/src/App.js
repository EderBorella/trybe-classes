import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './store';

function App({ isFetching, src, fetchDog }) {
  const textoInicial = 'Clique no botão para ver os mais inusitados doguinhos do mundo.'
  return (
    isFetching ? <p>Loading</p>
      : (
        <div style={ { width: 500 } }>
          <button
            style={ { display: 'block' } }
            onClick={ fetchDog }
            type="button"
          >
            Novo Doguinho
          </button>
          { src === '' ? textoInicial : <img style={ { width: '100%' } } src={ src } alt="dog" /> }
        </div>
      )
  );
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);