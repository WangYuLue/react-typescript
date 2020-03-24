import React from 'react';
import { observer, inject } from 'mobx-react';
import Store from '../../store';
import { uuid } from '../../util';

@inject('store')
@observer
class About extends React.Component<{ store?: Store }, {}> {
  render() {
    console.log('about render');
    const { store } = this.props;
    return (
      <div>
        <button onClick={() => this.props.store.setName(uuid())}>click</button>
        <div>about page: {store.name}</div>
      </div>
    );
  }
}

export default About;