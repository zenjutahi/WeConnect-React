import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from "../Login/LoginPage";

Enzyme.configure({ adapter: new Adapter() });


it('renders without login error', () => {
  const login = shallow(<LoginPage />);
  expect(login.find('h3').length).toEqual(1);
});
