import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Input from './Input';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
function App() {
  const [length, setLength] = useState(8);
  const [isNumber , setIsNumber] = useState(false);
  const [isChar , setIsChar] = useState(false);
  const [password , setPassword] = useState('');
  const [popup , setPopup] = useState(false);

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNumber) str += "0123456789"
    if(isChar) str += "!@#$%^&*()_+"

    for(let i=1; i<length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass);

  },[length,isNumber,isChar])

  const copyPasswordToClipBoard = ()=>{
    setPopup(true);
    window.navigator.clipboard.writeText(password);
    setTimeout(()=>{
      setPopup(false);
    },2000)
  }


  useEffect(()=>{
   generatePassword(); 
  },[length,isChar,isNumber])


  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-violet-950' >
      <h1 className='text-white text-4xl'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <div className='flex shadow rounded-lg overflow-hidden my-4'>
          <Input
          label = ""
          placeholder = "Password"
          className="rounded-r-none"
          value={password}
          />
          <button
          onClick= {copyPasswordToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>
        <Input
        label={`length: ${length}`}
        type="range"
        min= {6}
        max={30}
        value={length}
        className="appearance-none bg-green-400 duration-200 focus:bg-orange-400 w-full h-2 rounded-lg in-range:border-green-400 "
        onChange = {(e)=> setLength(e.target.value)}
        />
        <div className='flex justify-between items-center mt-3'>
        <Input
        label="Character"
        type="checkbox"
        defaultChecked = {isChar}
        onChange = {()=> {setIsChar((prev)=> !prev)}}
        className="w-1/6 ml-2"
        />
        <Input
        label="Number"
        type="checkbox"
        defaultChecked = {isNumber}
        onChange = {()=> {setIsNumber((prev)=> !prev)}}
        className="w-1/6 ml-2"
        />
        </div>
      </div>

      {/* alert */}

      <div className={popup == true ?"block fixed top-10 right-10 duration-200 rounded-md bg-green-50 p-4" : "fixed top-10 right-[-300px] duration-200 rounded-md bg-green-50 p-4" }>
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">Successfully Copied!</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              onClick={()=>setPopup(false)}
              type="button"
              className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* alert end */}
    </div>

  )
}

export default App
