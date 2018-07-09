import BusinessRegisterPage from "../BusinessRegisterPage";
import { MemoryRouter } from "react-router-dom";

jest.mock('../../../Services/Services');

describe('BusinessRegisterPage Component', () => {

 // make our assertion and what we expect to happen
 it('should render without throwing an error', () => {
   expect(shallow(<BusinessRegisterPage />).find('div').length).toEqual(25)
 })

 it('handleRegister receives response async', (done) => {
   expect.assertions(1);
   const wrapper =  mount(<MemoryRouter><BusinessRegisterPage /></MemoryRouter>);
   const form = wrapper.find('form');
   form.find('#name').simulate("change", {target: {value: 'Bazuka', name: 'email'}});
   form.find('#description').simulate("change", {target: {value: 'I think we are lost', name:'description'}});
   form.find('#inlineFormCustomSelect1').simulate("change", {target: {value: 'Muranga', name:'location'}});
   form.find('#inlineFormCustomSelect2').simulate("change", {target: {value: 'Marketing', name:'category'}});
   form.simulate('submit');

   setTimeout(()=>{
     const bussMessage = localStorage.getItem('bussMessage');
     console.log(bussMessage)
     expect(bussMessage).toEqual("New business has been created")
     done();
   });
 })
});
