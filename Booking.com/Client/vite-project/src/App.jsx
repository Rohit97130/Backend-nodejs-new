
import './App.css'

import {BrowserRouter ,Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import {useSelector} from 'react-redux';
import Admin from './Pages/Admin/Admin'
import Profile  from './Pages/Profile/Profile'

function App() {

   const {loading} = useSelector((state)=> state.loader)

  return (
    <>
       {loading && <div className='loader-container'><div className='loader'></div></div>}
       <BrowserRouter>
        <Routes>
           <Route  path='/' element = {<ProtectedRoute><Home/></ProtectedRoute>}/>
           <Route  path='/profile' element = {<ProtectedRoute><Profile/></ProtectedRoute>}/>
           <Route  path='/admin' element = {<ProtectedRoute><Admin/></ProtectedRoute>}/>


           <Route path='/login' element = {<Login/>}/>
           <Route path='/register' element={<Register/>}/> 
         </Routes>
     </BrowserRouter>
    </>
   
  )
}

export default App
