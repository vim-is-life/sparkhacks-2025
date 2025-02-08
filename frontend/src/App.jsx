// Import Packages
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';

// axios for api requests
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'

// Imported Pages
import HomePage from "./HomePage/HomePage";
import Layout from "./Layout";
import BusinessOrCustomerPage from './SignUp/BusinessOrCustomerPage';
import SignUpBusiness from './SignUp/SignUpBusiness';;
import SignUpCustomer from './SignUp/SignUpCustomer';
import SignInPage from './SignUp/SignIn';
import LandingPage from './LandingPage/LandingPage';
import BusinessPhotoUploadPage from './SignUp/BusinessAddPhotos';

// Connects Frontend to Backend
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;



export default function App() {
  return (   
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element = {<LandingPage />} />
          <Route path='/home' element = {<HomePage /> } />
          <Route path='/signup' element = {< BusinessOrCustomerPage /> } />
          <Route path='/signup/business' element = {<SignUpBusiness /> } />
          <Route path='/signup/business/addphotos' element = {<BusinessPhotoUploadPage/>} />
          <Route path='/signup/customer' element = {<SignUpCustomer /> } />
          <Route path='/signin' element = {<SignInPage /> } />
        </Route>
      </Routes>
    </AuthProvider>  
  )
}
