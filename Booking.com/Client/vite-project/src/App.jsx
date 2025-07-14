
import './App.css'

import {BrowserRouter ,Routes , Route} from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/Login';
import Register from './Pages/register';

function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
           <Route  path='/' element = {<Home/>}/>
           <Route path='/login' element = {<Login/>}/>
           <Route path='/register' element={<Register/>}/>
        </Routes>
     </BrowserRouter>
       
    </>
   
  )
}

export default App
