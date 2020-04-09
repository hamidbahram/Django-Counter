// import React from 'react';
import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import axios from 'axios';

class Counter extends Component {
  state = {
    count: 0,
  };

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
    console.warn('UpdateCounter')
    fetch("http://localhost:8000/add/1/")
      .then((response) => response.json())
      .then((counter) => {
        console.log(counter);
        if (counter.new_object === this.state.count + 1) {
          this.setState({ count: counter.new_object });
        }
      });
  };

  componentDidMount() {
    console.warn('componentDidMount')
    fetch("http://127.0.0.1:8000/api/")
      .then((response) => response.json())
      .then((counter) => {
        console.log(counter)
        this.setState({ count: counter[0].num });
      });
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.state.count !== prevState.count){
  //     fetch('http://localhost:8000/show/1/')
  //     .then((response) => response.json())
  //     .then((counter) => this.setState({count: counter}));
  //   }else{
  //     console.log('no')
  //   }
  // }

  render() {
    console.warn('render')
    return (
      <div>
        <p>
          <span
            style={{ fontSize: "30px" }}
            className={"badge badge-primary m-2"}
          >
            {this.state.count}
          </span>
        </p>
        <button 
          onClick={this.UpdateCounter}
          className={"btn btn-warning m-2"}
        >
          add
        </button>
      </div>
    );
  }
}

export default Counter;