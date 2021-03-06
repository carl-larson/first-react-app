import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      input: '',
      items: []
    }
  }
  toggle = () => {
    
    // this.setState({isOn: !this.state.isOn})
  }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }
  
  formSubmit = event => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.input],
      input: ''
    })
  }

  deleteItem = (index) => {
    console.log(index)
    let newList = [...this.state.items];
    newList.splice(index, 1);
    this.setState({
      items: [...newList]
    })
  }

  render() {
    // console.log(this.state.isOn)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Little Todo List</h1>
          <form onSubmit={this.formSubmit}>
            <input type="text" placeholder="TODO Item" value={this.state.input} onChange={this.inputUpdate}></input>
            <button>Submit</button>
          </form>
          <ul>
            {this.state.items.map((item, index) => {
              return <li key={item}><input type='checkbox'></input><span>{this.state.items[index]}</span><button onClick={() => (this.deleteItem(index))}>🗑</button></li>
            })}
          </ul>
        </header>
      </div>
    );
  }
  
}

  

export default App;
