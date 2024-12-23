// import logo from './logo.svg';
import './App.css';
// import { Button } from 'antd';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'

import {BrowserRouter ,Routes ,Route,Navigate} from "react-router-dom"
import DefaultHome from './pages/DefaultHome';
import Templates from './pages/templates';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
            <Routes>
            <Route path='/' element={<DefaultHome/>}/>
            <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/templates/:id' element={<ProtectedRoute><Templates/></ProtectedRoute>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>

            </Routes>


     </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if(localStorage.getItem("resume-user")){
    return props.children;
  }
  else{
    return <Navigate to="/login"/>;
  }
}
