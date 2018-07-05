import LoginPage from "../Login/LoginPage";
import NavBar from "../Navbar/Navbar";
import Logout from "../Logout/Logout";
import BusinessListPage from "../BusinessList/BusinessListPage";
import BusinessRegisterPage from "../BusinessRegister/BusinessRegisterPage";
import BusinessRegisterForm from "../BusinessRegister/BusinessRegisterForm";
import RegisterPage from "../Register/RegisterPage";
import RegisterForm from "../Register/RegisterForm";



it('renders without login error', () => {
  const login = shallow(<LoginPage />);
  expect(login.find('h3').length).toEqual(1);
});

it('renders form login without error', () => {
  const login = shallow(<LoginPage />);
  expect(login.find('div').length).toEqual(7);
});

it('should get data from request', () => {
  const data = shallow(<NavBar />);
  expect( data.find('nav').length).toEqual(1);
});

it('should run handleLogin function', () => {
  const handleLogin = shallow(<LoginPage />);
  expect( handleLogin.find(handleLogin).length).toEqual(0);
});

it('should run display businessList', () => {
  const page = shallow(<BusinessListPage />);
  expect(page.find('div').length).toEqual(5);
});

it('should run display register businessPage', () => {
  const page = shallow(<BusinessRegisterPage />);
  expect(page.find('header').length).toEqual(1);
});

it('should run display register business Form', () => {
  const page = shallow(<BusinessRegisterForm />);
  expect(page.find('form').length).toEqual(1);
});

it('should run display user register Form', () => {
  const page = shallow(<RegisterForm />);
  expect(page.find('form').length).toEqual(1);
});

it('should run display user register page', () => {
  const page = shallow(<RegisterPage />);
  expect(page.find('div').length).toEqual(6);
});

// describe('Login Component', () => {
//
//  // make our assertion and what we expect to happen
//  it('should render without throwing an error', () => {
//    expect(shallow(<Logout />).find('div.loader').exists()).toBe(true)
//  })
// })
