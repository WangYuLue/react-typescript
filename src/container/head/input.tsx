import React from 'react';
import { observer, inject } from 'mobx-react';
import Store from '../../store';

@inject('store')
@observer
class Input extends React.Component<{ store?: Store }, {}>{
  render() {
    console.log('about render');
    const { store } = this.props;
    return (
      <div>
        <button onClick={() => store.setData({ a: 1 })}>input data</button>
      </div>
    );
  }
}

export default Input;