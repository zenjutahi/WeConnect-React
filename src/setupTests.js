import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

class MockLocalStorage {
  constructor () {
    this.storage = new Map();
  }
  setItem (key, value) {
    this.storage.set(key, value);
  }
  getItem (key) {
    return this.storage.get(key);
  }
  removeItem (key) {
    this.storage.delete(key);
  }
  clear () {
    this.constructor();
  }
}

global.localStorage = new MockLocalStorage();
global.shallow = shallow;
global.React = React;
