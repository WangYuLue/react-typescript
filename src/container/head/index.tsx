import React from 'react';
import { observer, inject } from 'mobx-react';
import Input from './input';
import Store from '../../store';

interface IProp {
  store?: Store
}

function Head(prop: IProp) {
  console.log('Head render');

  return (
    <div>
      <Input />
      <div>head page: {prop.store.name}</div>
    </div>

  );
}

export default inject('store')(observer(Head));