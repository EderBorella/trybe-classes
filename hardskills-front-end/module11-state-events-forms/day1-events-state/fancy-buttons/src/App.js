import './App.css';
import React from 'react';

class App extends React.Component {
  state = {count: 0};

  increment = () => this.setState({ count: this.state.count + 1})

  render() {
    return <button onClick={this.increment}>Meus cliques: {this.state.count}</button>
  }
}

export default App;
