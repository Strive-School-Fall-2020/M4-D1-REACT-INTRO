import React from 'react'
import logo from './logo.svg';
import './App.css';
import { NewComponent } from './NewComponent'

class App extends React.Component {


  state = {
    color: 'red'
  }

  changeColor = () => {
    this.setState({
      color: this.state.color === 'red' ? 'green' : 'red'
    })
  }

  render() {
    console.log(this.props.myProp)
    return (
      <div className="App">
        <header className="App-header">
          <NewComponent count={0} color={this.state.color} />
          <NewComponent count={1} />
          <NewComponent count={2} />
          <button onClick={this.changeColor}>CHANGE COLOR</button>
          <p style={{ color: this.state.color }}>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
