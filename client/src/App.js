import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { ToastContainer } from 'react-toastify';
import App1 from './components/frontend/src/App1'


function App() {
  return (
   <>
   <ToastContainer/>
    <Routes>
      <Route path='/' element={
       
 <HomePage/>
        
       }/>
      <Route path='/login' element={
       
          <Login/>
        
       
        }/>
      <Route path='/register' element={
       
           <Register/>
        
       }/>
        <Route path='/appo' element={
       
       <App1/>
    
   }/>
       

    </Routes>
    
   </>
  );
}

export default App;
