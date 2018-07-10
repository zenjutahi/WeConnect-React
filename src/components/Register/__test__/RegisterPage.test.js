import RegisterPage from "../RegisterPage";
import { MemoryRouter } from "react-router-dom";

jest.mock('../../../Services/Services');

describe('Register Component', () => {

 // make our assertion and what we expect to happen
 it('should render without throwing an error', () => {
   expect(shallow(<RegisterPage />).find('div').length).toEqual(6)
 })

 it('handleRegister receives response async', (done) => {
   // expect.assertions(1);
   const wrapper =  mount(<MemoryRouter><RegisterPage /></MemoryRouter>);
   const form = wrapper.find('form');
   form.find('#firstName').simulate("change", {target: {value: 'Jeff', name: 'firstName'}});
   // console.log(form)
   // console.log(form.find('#firstName'))
   form.find('#username').simulate("change", {target: {value: 'Zenjutahi', name: 'username'}});
   form.find('#email').simulate("change", {target: {value: 'jeff@gmail.com', name: 'email'}});
   form.find('#password').simulate("change", {target: {value: 'mutahi123', name: 'password'}});
   form.simulate('submit');

   setTimeout(()=>{
     const userMessage = localStorage.getItem('register_message');
     console.log(userMessage)
     expect(userMessage).toEqual("Zenjutahi's account succesfully created")
     done();
   });
 })
});
