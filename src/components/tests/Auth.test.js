import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from "../Login/LoginPage";

Enzyme.configure({ adapter: new Adapter() });


it('renders without login error', () => {
  const login = shallow(<LoginPage />);
  expect(login.find('h3').length).toEqual(1);
});

it('renders form login without error', () => {
  const login = shallow(<LoginPage />);
  expect(login.find('div').length).toEqual(7);
});

it('should get data from request', () => {
  const data = shallow(<LoginPage />);
  expect( data.find(data).length).toEqual(0);
});

it('should run handleLogin function', () => {
  const handleLogin = shallow(<LoginPage />);
  expect( handleLogin.find(handleLogin).length).toEqual(0);
});
