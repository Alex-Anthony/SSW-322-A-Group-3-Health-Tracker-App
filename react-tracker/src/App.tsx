import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserHome from "./pages/UserHome"
import Login from './pages/Login';
import HealthData from './pages/Health-Data';
import Insights from './pages/Insights';
import DoctorPortal from './pages/Doctor-Portal';
import UserSettings from './pages/Settings';
//import BackendDemo from './pages/BackendDemo';
import SignUp from './pages/Register';
import FitbitDataComponent from './components/FitbitDataComponent';
//import firebaseConfig from './backend/firebaseConfig'
//import { initializeApp } from "firebase/app";


//const app = initializeApp(firebaseConfig);

/**
 * <BrowserRouter>
      <Routes>
        <Route path="/fitbit-data" element={<FitbitDataComponent />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/health-data" element={<HealthData />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/doctor-portal" element={<DoctorPortal />} />
        <Route path="/" element={<BackendDemo />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>

 * 
 */

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fitbit-data" element={<FitbitDataComponent />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/health-data" element={<HealthData />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/doctor-portal" element={<DoctorPortal />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
