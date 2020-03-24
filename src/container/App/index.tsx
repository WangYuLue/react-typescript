import React from 'react';
import { observer, inject, Provider } from 'mobx-react';
import Head from '../head';
import About from '../about';
import Store, { store } from '../../store';
import './index.scss';



// 支持可选链写法
const a = { num: 1 };
const b = a?.num;
console.log(b);

@observer
class App extends React.Component {
  render() {
    console.log('App render');
    return (
      <Provider store={store}>
        <Head />
        <button onClick={() => store.setCount(Math.random())}>click</button>
        <div> Hello React! {store.count}</div>
        <div> Hello React! {store.data.length}</div>
        <About />
      </Provider>
    );
  }
}



export default App;