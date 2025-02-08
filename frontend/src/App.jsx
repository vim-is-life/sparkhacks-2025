// Import Packages
import { Routes, Route } from 'react-router-dom';

// axios for api requests
import axios from 'axios';

// Imported Pages
import HomePage from "./HomePage/HomePage";
import Layout from "./Layout";
import BusinessOrCustomerPage from './SignUp/BusinessOrCustomerPage';

// Connects Frontend to Backend
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;



export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path='intro' element={<Layout />}>
        <Route index element={<BusinessOrCustomerPage />} />
      </Route>
    </Routes>
  )
}
