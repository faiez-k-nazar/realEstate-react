
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Auth from './Pages/Auth'


function App() {

  

  return (
    <>
    
<Header/>

<Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Auth/>}/>

</Routes>
<Footer/>

 
    </>
  )



}

export default App
 



