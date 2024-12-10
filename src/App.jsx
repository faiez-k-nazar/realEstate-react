
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import About from './Pages/About'
import Profile from './Pages/Profile'
import SignUp from './Pages/SignUp'


function App() {

  

  return (
    <>
    
<Header/>

<Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profile' element={<Profile/>}/>
    

</Routes>
<Footer/>

 
    </>
  )



}

export default App
 



