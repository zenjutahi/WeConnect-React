import LoginPage from "../LoginPage";
import { MemoryRouter } from "react-router-dom";

jest.mock('../../../Services/Services');

describe('LoginPage Component', () => {

 // make our assertion and what we expect to happen

 it('renders without login error', () => {
   const login = shallow(<LoginPage />);
   expect(login.find('h3').length).toEqual(1);
 });

 it('should render without throwing an error', () => {
   expect(shallow(<LoginPage />).find('div').length).toEqual(7)
 })

 it('handleLogin receives response async', (done) => {
   expect.assertions(1);
   const wrapper =  mount(<MemoryRouter><LoginPage /></MemoryRouter>);
   const form = wrapper.find('form');
   form.find('#email').simulate("change", {target: {value: 'jeff@gmail.com', name: 'email'}});
   form.find('#password').simulate("change", {target: {value: 'pass', name:'password'}});
   form.simulate('submit');

   setTimeout(()=>{
     const userToken = localStorage.getItem('accessToken');
     expect(userToken).toEqual('a.user.token');
     done();
   });
 })
});
