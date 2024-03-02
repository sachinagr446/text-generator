import { useState,useEffect, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isNum, setisNum] = useState(false)
  const [isUp, setisUp] = useState(false)
  const [isLow, setisLow] = useState(true)
  const [isSym, setisSym] = useState(false)
  const [length, setlength] = useState(4)
  const [Password, setPassword] = useState("0000")
  const [display, setdisplay] = useState(false)
const Passwordgenerator=useCallback(()=>{
  let str="abcdefghijklmnopqrstuvwxyz"
  let pass=""
  const strNum="0123456789"
  const strUp="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const strLow=strUp.toLowerCase()
  const strSym="!@#$%^&*()+-"
  if(isNum){
    str=str+strNum
  }
  if(isUp){
    str=str+strUp
  }
  if(isLow){
    str=str+strLow
  }
  if(isSym){
    str=str+strSym
  }
  for (let i = 0; i < length; i++) {
   let char=Math.floor(Math.random()*str.length+1)
   console.log(char)
    pass +=str.charAt(char)
  }
  setPassword(pass)
},[length,isUp,isLow,isSym,isNum] )
useEffect(() => {
  Passwordgenerator()
console.log(Password)
  
}, [length,isUp,isLow,isSym,isNum])
const handleCopy=()=>{
  setdisplay(true)
  window.navigator.clipboard.writeText(Password)
  setTimeout(() => {
    setdisplay(false)
  }, 2000);
}
  return (
    <>
      <div className="bg-white my-10 rounded-xl h-1/2 shadow-lg">
        <h1 className=" pt-8 text-pretty anta text-5xl my-7">Password Generator</h1>
        <div className="flex justify-center mb-7">
          <input type="text" className="w-1/2 border outline-yellow-500 py-2"  value={Password}/>
          <button className="bg-yellow-300 anta py-2 px-5 rounded-lg mx-0 -translate-x-1 hover:bg-yellow-400" onClick={handleCopy}>Copy</button>
        </div>
        <div className="">
          <span className={`m-0 absolute right-1/2 -translate-y-5 p-0 ${(!display)?"hidden":"block "}`}>copied!</span>
          <div className="space-x-1 flex justify-center items-center" >
            <input type="range" value={length} min={4} max={100} id="length" className="w-1/3 md:w-1/2" onChange={(e)=>{setlength(e.target.value)}} />
            <label htmlFor="length " className="anta">Length:{length}</label>
          </div>
          <div className="flex pb-8 pt-43flex-wrap justify-center items-center lg:space-x-7 my-4">
            <div className="md:flex space-x-2 space-y-2 md:space-y-0 md:space-x-4">

            <div className="space-x-1 ">
              <input type="checkbox" className="accent-yellow-300" id="num" defaultChecked={isNum} onChange={()=>{setisNum(((prev)=>!prev))}}/>
              <label htmlFor="num " className="anta" >Numbers</label>
            </div>
            <div className="space-x-1">
              <input type="checkbox" id="char" className="accent-yellow-300" defaultChecked={isSym} onChange={()=>{setisSym(((prev)=>!prev))}}/>
              <label htmlFor="char" className="anta"   >Symbols</label>
              </div>
            </div>
            <div className="md:flex mx-3 space-x-2 space-y-2 md:space-y-0 md:space-x-4">

            <div className="space-x-1">
              <input type="checkbox" className="accent-yellow-300" defaultChecked={isUp} onChange={()=>{setisUp(((prev)=>!prev))}} id="upchar" />
              <label htmlFor="char" className="anta">Uppercase</label>
              </div>
            <div className="space-x-1 ">
              <input type="checkbox" className="accent-yellow-300" defaultChecked={isLow} onChange={()=>{setisLow((prev=>!prev))}} id="lowchar" />
              <label htmlFor="char"  className="anta">Lowercase</label>
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
