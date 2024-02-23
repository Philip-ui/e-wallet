import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import Home from './pages/Home';
import Login from './pages/Login';
import { LoginoutContext } from './LoginoutContext';
import { AuthContext } from './AuthContext';
import RequireAuth from './components/RequireAuth';
import Logout from './pages/Logout';
import { useState } from "react";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";

export default function App() {
 const [token, setToken] = useLocalStorage("token", null);
 const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ token, setToken}}>
    <LoginoutContext.Provider value={{isLoggedIn, setIsLoggedIn}}>             
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Login />}/>         
            <Route index element={<Login />} />           
            <Route path="login" element={<Login />} />           
            <Route path="*" element={<ErrorPage />} />           
            <Route path='home' element={ 
                <RequireAuth>
                  <Home />
                </RequireAuth>
            }       
            />
            <Route path='logout' element={<Logout />} />          
        </Routes>
      </BrowserRouter>      
    </LoginoutContext.Provider>
  </AuthContext.Provider>
  );
}

