import axios from 'axios'
import React,{ useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext'



const Login = () => {

    let [login,setLogin]=useState({
        password:"",
        email:""
      })
      let {setState}=useContext(UserContext)
    
      const [error,setError]=useState({
      })
    
      let {password,email}=login
         let navigate=useNavigate()
    let handleChange=(e)=>{
         let {name,value}=e.target

     setLogin({...login,[name]:value})
     let newErr={...error}
     
     if(name==="password"){
         if (value === "") {
           newErr.password="Password is required"
         }
         else if(value.length <8){
            newErr.password="password should be eight or more characters"
         } 
         else{
               delete newErr.password
         }
         setError(newErr);
         console.log(error.password);
     }
      
     if (name === "email") {
         if (value === "") {
           newErr.email="email is required"
         }
         else if(!value.endsWith("@gmail.com")){
            newErr.email="email should ends with @gmail.com"
         } 
         else{
               delete newErr.email
         }
         
         setError(newErr);
         console.log(error.email);
         
     }

    }

    let handleSubmit=async (e)=>{

        e.preventDefault();
     if (password==="") {
       alert("password is mandatory")
       return 
     }
     if (email==="") {
      alert("email is mandatory")
      return
     }
     
     if (Object.keys(error).length>0) {
       alert("fix errors before Submitting")
       return;
     }
     
     try {
      let res=await axios.get("http://localhost:10000/data")

      let users=res.data

      let foundUser = users.find((u) =>{
        return u.email === email && u.password === password
      })

      if (foundUser) { 
         console.log(foundUser);
         
         localStorage.setItem("user",JSON.stringify(foundUser))
         setState(foundUser)
         navigate("/")
         
      }else{
        alert("Invalid email or password")
      }

        
     } catch (error) {
        console.log(error);
        
     }

    }

  return (

    <div className='formcontainer'>
      <div className='formcard'>
        <h3 className='formtitle'>Check Login </h3>
        <form action="" onSubmit={handleSubmit}>
          <div className='inputgroup'>
        <input type="text" name="email" placeholder='enter mailid' id="" onChange={handleChange}/> <br />
        <p className='error'>{error.email}</p> <br />
        </div>

        <div className='inputgroup'>
        <input type="text" name="password" placeholder='enter password' id="" onChange={handleChange}/> <br />
        <p className='error'>{error.password}</p> <br />
        </div>
        <input type="submit" value="submit" className='submitbtn'/>
        
        </form>
        <p className='formlinktext'>
          Don't have an account? 
        <Link to="/signup">Signup</Link> first</p>
        </div>
    </div>
  )
}

export default Login