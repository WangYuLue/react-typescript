import { observable, action } from 'mobx';

export default class Store {
  @observable count = 1;
  @observable name = 'name';
  @observable data = [{
    a: 1
  }, {
    a: 2
  }]
  @action.bound
  setCount(count: number) {
    this.count = count;
  }
  @action.bound
  setName(name: string) {
    this.name = name;
  }
  @action.bound
  setData(data: any) {
    this.data = data;
  }
}

export const store = new Store();