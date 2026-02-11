import React, { useState } from 'react'
import './App.css'

const App = () => {

  let [bg,setBg]=useState(false);
  let [arrow,setArrow]=useState(0);

  let [bg2,setBg2]=useState(false);
  let [arrow2,setArrow2]=useState(0);

   let handleFunction=()=>{
      let pos=0;
      setInterval(() => {
         if(pos>=150){
            setBg(true)
         }else{
            pos+=50
            setArrow(pos)
         }
      }, 20)
  }

  let handleFunction2=()=>{
      let pos=0;
      setInterval(() => {
         if(pos>=150){
            setBg2(true)
         }else{
            pos+=50
            setArrow2(pos)
         }
      }, 20)
  }

  return (
    <div className='maincont'>
       <div className='cont1'>
          <div className='arr' style={{ left:`${arrow}px`}} onClick={handleFunction}> </div>
           <div className='circle' style={{ backgroundColor: bg ? 'red' : 'transparent'}}></div>
        </div>

        <div className='cont2'>
          <div className='arr' style={{ left:`${arrow2}px`}} onClick={handleFunction2}> </div>
           <div className='circle' style={{ backgroundColor: bg2 ? 'yellow' : 'transparent'}}></div>
        </div>
       
    </div>
  )
}

export default App