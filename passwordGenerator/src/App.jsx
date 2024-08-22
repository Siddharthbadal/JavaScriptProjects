import React, { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'

const App = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass ="";
    let str = "qazxswerdfcvbnmklfghrtyuiopAQZXSWMEDCVFRTYUIPLKJHGVBN"

    if(numberAllowed){
      str += "0123456789"
    }
    if (charAllowed){
      str += "~!@#$%^&*_+',./:?"
    }

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()* str.length +1);
      
      pass += str.charAt(char)
      
    }
    setPassword(pass)


  },  [
        length,
        numberAllowed,
        charAllowed,
        setPassword
      ])

  // ? is for what is no value avilable
const copyPasswordToClipBoard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,24);
  window.navigator.clipboard.writeText(password)
}, [password])

useEffect(()=> {
  passwordGenerator()
  }, 
  [length, numberAllowed, charAllowed, passwordGenerator]
)
  return (
    
      <div className="w-full max-w-lg mx-auto shadow-lg rounded-lg px-4 my-8 text-orange-500 bg-gray-500">

      <h1 className='text-center text-3xl text-white font-bold mt-7 mb-3 py-5 px-5 underline'>Password Generator</h1>
            
            <div className="flex  rounded-lg overflow-hidden ">
              <input 
                type="text" 
                value ={password}
                className="outline-none w-full py-2 px-2 mb-7 rounded text-xl font-bold"
                placeholder='Password'
                readOnly
                ref={passwordRef}
                />

                <button onClick={copyPasswordToClipBoard}
                  className="bg-white text-blue-700 hover:text-blue-950 font-bold hover:bg-blue-100 border-2 border-gray-500 px-4 py-2 mb-7 ml-1 shrink-0 text-lg">COPY</button>
            </div>

            <div className="flex text-lg gap-x-2 mt-3">
              <div className="flex items-center gap-x-1 mb-7">
                <input 
                  type="range"  
                  min={6}
                  max={24}
                  value={length}
                  className="cursor-pointer w-24 h-50"

                  onChange={(e)=>{setLength(e.target.value)}}
                  />
                  <label className="text-white font-bold">Length: {length} </label>
              </div>

              <div className="flex items-center gap-x-1 mb-7 ml-4">
              <input 
                  type="checkbox"  
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  className="cursor-pointer w-5"
                  style={{height:`${50}px`}}
                  onChange={()=>{
                    setNumberAllowed((prev)=>!prev)
                  }}
                  />
                  <label className="text-white font-bold">Numbers </label>
              </div>

              <div className="flex items-center gap-x-1 mb-7 ml-4">
              <input 
                  type="checkbox"  
                  defaultChecked={charAllowed}
                  id="charInput"
                  className="cursor-pointer w-5"
                  style={{height:`${50}px`}}
                 
                  onChange={()=>{
                    setCharAllowed((prev)=>!prev)
                  }}
                  />
                  <label className="text-white font-bold">Characters </label>
              </div>
            </div>
      </div>
    
  )
}

export default App