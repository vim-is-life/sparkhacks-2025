// Import Packages
import { Routes, Route } from 'react-router-dom';

// axios for api requests
import axios from 'axios';

// Imported Pages
import HomePage from "./HomePage/HomePage";
import Layout from "./Layout";
import BusinessOrCustomerPage from './SignUp/BusinessOrCustomerPage';
import SignUpBusiness from './SignUp/SignUpBusiness';;
import SignUpCustomer from './SignUp/SignUpCustomer';
import SignInPage from './SignUp/SignIn';

// Connects Frontend to Backend
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;



export default function App() {
  return (   
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/signup' element = {< BusinessOrCustomerPage /> } />
        <Route path='/signup/business' element = {<SignUpBusiness /> } />
        <Route path='/signup/customer' element = {<SignUpCustomer /> } />
        <Route path='/signin' element = {<SignInPage /> } />
      </Route>
    </Routes>
  )
}
