// Import Packages
import { Routes, Route } from 'react-router-dom';

// axios for api requests
import axios from 'axios';

// Imported Pages
import HomePage from "./HomePage/HomePage";
import Layout from "./Layout";

// Connects Frontend to Backend
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;



export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}
