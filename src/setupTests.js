import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

class MockLocalStorage {
  constructor () {
    this.storage = {};
  }
  setItem (key, value) {
    this.storage[key] = value.toString();
  }
  getItem (key) {
    return this.storage[key] || null;
  }
  removeItem (key) {
    delete this.storage[key];
  }
  clear () {
    this.storage = {}
  }
}

global.localStorage = new MockLocalStorage;
global.shallow = shallow;
global.mount = mount;
global.React = React;
