// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: []
  //   }
  // }

  state = {
    count: []
  }
  
  // UpdateCounter = e => {
  //   e.preventDefault();
  //   axios.put('http://localhost:8000/api/edit/1/' + this.state.count, this.state).then(() => {
  //     this.setState({ count: this.state.count + 1 });

  //   });
  // };

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/')
    .then((response) => response.json())
    .then(counter => {
        this.setState({ count: counter });
    });
  }


render() {
  return (
    <div>
      <p>
        {this.state.count.map(number => 
          <span style={{fontSize:'30px'}} className={'badge badge-primary m-2'} key={number.id}>{number.num}</span>
        )} 
      </p>
      <button onClick={this.UpdateCounter} className={'btn btn-warning m-2'}>add</button>
    </div>
    )
  }
}
 
export default Counter;