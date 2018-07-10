import ResetPasswordPage from "../ResetPasswordPage";
import { MemoryRouter } from "react-router-dom";

jest.mock('../../../Services/Services');

describe('ResetPassword Component', () => {

 // make our assertion and what we expect to happen
 it('should render without throwing an error', () => {
   expect(shallow(<ResetPasswordPage />).find('div').length).toEqual(7)
 })

 it('handleRegister receives response async', (done) => {
   expect.assertions(1);
   const wrapper =  mount(<MemoryRouter><ResetPasswordPage /></MemoryRouter>);
   const form = wrapper.find('form');
   form.find('#email').simulate("change", {target: {value: 'jeff@gmail.com', name: 'email'}});
   form.simulate('submit');

   setTimeout(()=>{
     const resetMessage = localStorage.getItem('resetMessage');
     console.log(resetMessage)
     expect(resetMessage).toEqual("Check your email address for new password")
     done();
   });
 })
});
