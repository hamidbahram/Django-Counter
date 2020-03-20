// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import axios from 'axios';

class Counter extends Component {
  state = {
    count: []
  }
  
  // handelIncrement = (product) => {
  //     console.log(product);
  //     this.setState({ count: this.state.count + 1 });
  //   }

  // UpdateCounter = () => {
  //   axios.put('http://localhost:8000/api/edit/1/', {
  //     num: 506
  //   })
  //   .then(res => console.log(res))
  // };

  UpdateCounter = () => {
    fetch('http://localhost:8000/add/1/')
    .then((response) => response.json())
    .then(counter => {
        console.log(counter)
    });
  };

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
      <button onClick={() => this.UpdateCounter()} className={'btn btn-warning m-2'}>add</button>
    </div>
    )
  }
}
 
export default Counter;