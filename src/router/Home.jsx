import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from './UserContext'


const Home = () => {
  const [menuopen,setMenuopen]=useState(false)
  const [menu,Setmenu]=useState(false)
  let {state,setState}=useContext(UserContext)

  let handleLogout=()=>{
        localStorage.removeItem("user")
        setState(null)
        console.log(state);
        Setmenu(false)
    }
  return (
    <div  >
      <nav className='navbar'>
         <h3 className='logo'>Ekart</h3>
        <div className='hamburger' onClick={()=>setMenuopen(!menuopen)}>
          ☰
        </div>

       <ul className={`navlinks ${menuopen ?"active":""}`}>

        <li >
            <Link to="/" onClick={()=>setMenuopen(false)}>Home page</Link>
           
        </li>
        <li>
             <Link to="/product" onClick={()=>setMenuopen(false)}>Product Page</Link>
        </li>
        <li>
             <Link to="/cart" onClick={()=>setMenuopen(false)}>Cart Page</Link>
        </li>

        { !state && (<li className='login'>
            <Link to="/login" onClick={()=>setMenuopen(false)}>Login</Link>
        </li>)}
       </ul>

       {
            state && (
            <div className='profilesection'>
                <div className='profile' onClick={()=> Setmenu(!menu)}>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" width="40" />
                    <span>{state.user}</span>
                </div>
            
         {
            menu && (
                <div className='dropdown'>
                    <button onClick={handleLogout}>logout</button>
                </div>
            )
        } 
        </div> )}
        </nav>
       <div>
       <Outlet></Outlet>
       </div>
    </div>
  )
}

export default Home