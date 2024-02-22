import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import Home from './pages/Home';
import Login from './pages/Login';
import { LoginoutContext } from './LoginoutContext';
import { AuthContext } from './AuthContext';
import RequireAuth from './components/RequireAuth';
import Logout from './pages/Logout';
//import Profile from './pages/Profile';
import { useState } from "react";
//import { TodoContext } from "./contexts/TodoContext";
//import EditTodo from "./pages/EditTodo";
//import AddTodo from "./pages/AddTodo";
import ErrorPage from "./pages/ErrorPage";
//import AddSchedule from "./pages/AddSchedule";
//import Schedule from './pages/Schedule';
//import EditSchedule from './pages/EditSchedule';
import "./App.css";

export default function App() {
 const [token, setToken] = useLocalStorage("token", null);
 const [isLoggedIn, setIsLoggedIn] = useState(false);
// const [todos, setTodos] = useLocalStorage("todos", []);
 //const [todoSchedules, setTodoSchedules] = useLocalStorage("todoSchedules", []);

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

