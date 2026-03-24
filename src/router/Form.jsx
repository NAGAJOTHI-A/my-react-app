import React, { useState } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

const Form = () => {

  let [state,setState]=useState({
    user:"",
    password:"",
    email:""
  })
  let navigate=useNavigate()
  const [error,setError]=useState({
  })

  let {user,password,email}=state
  let handleChange=(e)=>{

     let {name,value}=e.target
     value = value.trim(); 

     setState({...state,[name]:value})
     let newErr={...error}

     if(name === "user"){
       if(value === ""){
         newErr.user= "Name is required"
       }
       else if(!/^[a-zA-Z]+$/.test(value)){
            newErr.user="Only Alphabets allowed not numbers and special characters"
       }
       else{
           delete newErr.user;
       }
       
       console.log(error.name);
     }
     
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
     }
          setError(newErr);
         console.log(error);
  }

  let handleSubmit=async(e)=>{
     e.preventDefault();

     if (user==="") {
      alert("UserName is mandatory")
      return
     }
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
       console.log(error);
       return;
     }
      
     let payload={user,password,email}
     try{
      let res=await axios.get("https://69c29cd47518bf8facbef36f.mockapi.io/data");
      let users=res.data;
       let cleanEmail = email.trim();
      let emailExists=users.find((u)=> u.email === cleanEmail)

      if(emailExists){
          setError({ ...error,email: "Email already exists, try different email"})
          return;
      }

     await axios.post("https://69c29cd47518bf8facbef36f.mockapi.io/data",payload)
     console.log("Submitting...", payload);
     console.log("Users:", users);

     alert("you signedup successfully")
     navigate("/login")
         setState({
          user:"",
          password:"",
          email:""
         })

        setError({});

     }catch(err){
         console.log(err);
         
     }
  }

  return (
    <div className='formcontainer'>
      <div className='formcard'>
      <h3 className='formtitle'>SignUp</h3>
      <form onSubmit={handleSubmit}>
        <div className='inputgroup'>
       <input type="text" name="user" id="" onChange={handleChange} placeholder='Enter user name' /> <br />
       <p className='error'>{error.user}</p> <br />
       </div>
       <div className='inputgroup'>
       <input type="password" name="password" id="" onChange={handleChange} placeholder='Enter password'/> <br />
        <p className='error'>{error.password}</p> <br />
        </div>
        <div className='inputgroup'> 
       <input type="email" name="email" id="" onChange={handleChange} placeholder='Enter email address'/> <br />
       <p className='error'>{error.email}</p> <br />
        </div>
        
       <input type="submit" value="submit" className='submitbtn'/>
       
      </form>
      <p className='formlinktext'>
        Already have an Account? <Link to="/login">Login</Link> Now
      </p>
      </div>
    </div>
  )
}

export default Form