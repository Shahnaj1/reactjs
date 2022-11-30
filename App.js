// import React from 'react'
import About2 from './component/About2.js';
import Navbar from './component/Navebar.js';
import Textform1 from './component/textform1.js';
import React,{useState} from 'react';
export default function App(){ 
 const [mode,setMode]=useState('dark');
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
  }
  else{
    setMode('light'); 
  }
 }
   return(
    <>
    {/* <Navbar title ="shanu" mak="shahnaz"/> */}
    <Navbar title="Home" mak="Content" mode={mode} toggleMode={toggleMode}/>
        
        {/* <h1>
          shahnaz
        </h1> */}

       <Textform1 heading="Enter the text to analyse"/>
       {/* <About2/> */}
        </>
   );
}







