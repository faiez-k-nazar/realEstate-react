import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { MDBInput } from 'mdb-react-ui-kit';
import { loginAPI, registerAPI } from '../../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Auth({register}) {

const [userDetails,setUserDetails]=useState({
  username:"",
  email:"",
  password:""
})

const navigate=useNavigate()
  const handleRegister = async()=>{
    console.log(userDetails);

      const {username,email,password} = userDetails
      if(!username||!email||!password){
        toast.warn('Please fill the form', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark ",
          });
      }
      else{
        try{
          //API Fetching
          const response = await registerAPI(userDetails)
          console.log(response);
          if(response.status==200){
            toast.success(response.data, {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark ",
              });

                    setTimeout(()=>{
                      navigate('/login')
                    },4000)

          }


          else{
            toast.error(response.response.data.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark ",
              });
          }
          
        }
        catch(err){

        }
      }
       
    
    
  }

  const handleLogin = async()=>{
    console.log(userDetails);

      const {email,password} = userDetails
      if(!email||!password){
        toast.warn('Please fill the form', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark ",
          });
      }
      else{
        try{
          //API Fetching
      const response=await loginAPI(userDetails)
          console.log(response);
          if(response.status==200){
            toast.success('Login Successful', {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark ",
              });
              setTimeout(()=>{
                navigate('/dashboard')
              },5000)

              //To store usernmae in session storage
              sessionStorage.setItem("username",response.data.currentUser.username)
          }
          else{
            toast.error(response.response.data, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark ",
              });        
              }
          
        }
        catch(err){

        }
      }
       
    
    
  }
  return (
    <div>
     <div className="container ">
      <div className="row p-5">
        <div className="col-6">
          <img src="login-illustration.avif" alt="" />
        </div>
        <div className="col-6 text-center p-5">
          <h2 className='my-3'>Project Fair</h2>
          <h4 className='mb-3'>Sign {register?'Up':'In'} </h4>
          {register&&
                   <MDBInput onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}  className=' mb-3' label="UserName" id="form1" type="text" />
                   }
          <MDBInput onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}   className=' mb-3' label="Email" id="form1" type="email" />
          <MDBInput onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}   className=' mb-3' label="Password" id="form1" type="password" />
          
         {register?
          <div className='text-center'>
          <button onClick={handleRegister} className='btn mb-3'> Sign Up</button>
          
          <p>Already have an Account ! <Link to={'/login'}>Login Now</Link></p>
        </div>
        :
        <div className='text-center'>
        <button onClick={handleLogin} className='btn mb-3'> Sign in</button>
        
        <p>New to here?  <Link to={'/register'}>Register Now</Link></p>
      </div>
        }

        </div>
      </div>
     </div>
     <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />

    </div>
  )
}

export default Auth