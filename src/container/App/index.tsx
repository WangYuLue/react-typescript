import React, { Component } from 'react';
import './index.scss';

// 支持可选链写法
const a = { num: 1 };
const b = a?.num;
console.log(b);

// test husky lint
var s = 123;

class App extends Component {
  render() {
    return (
      <div>Hello React!</div>
    );
  }
}

export default App;