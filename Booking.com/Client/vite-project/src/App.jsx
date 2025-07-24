
import './App.css'

import {BrowserRouter ,Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {


  return (
    <>
       <BrowserRouter>
        <Routes>
           <Route  path='/' element = {<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path='/login' element = {<Login/>}/>
           <Route path='/register' element={<Register/>}/> 
         </Routes>
     </BrowserRouter>
    </>
   
  )
}

export default App
