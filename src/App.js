import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment=()=>{
    this.setState({count: this.state.count + 1});
  }

  decrement=()=>{
    this.setState({count: this.state.count - 1});
  }
  render() {
    return (
      <div className='main_App'>
        <h1>My simple counter using react js</h1>
        <div className="App">
          <button className='btn_count' onClick={this.decrement}> - </button>
          <button className='btn_count2' onClick={this.increment}> + </button>
          <h3>{this.state.count}</h3>
        </div>
      </div>
    );
  }
}

export default App;
