import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

function App() {
  const [color, setColor] = useState('olive');

  function onChange(color) {
    setColor(color);
  }


  return (
    <div className='flex justify-center items-center w-full h-screen duration-200' style={{backgroundColor: color}}>
      <h1 className='text-center text-white text-2xl'>Bg Changer React App Using State & Reuseable Button Component</h1>
      <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <Button 
            bgColor='bg-red-600' 
            textColor='text-white'
            onClick = {()=> onChange('red')}
            >Red</Button>
            <Button 
            bgColor='bg-green-600' 
            textColor='text-white'
            onClick = {()=> onChange('green')}
            >Green</Button>
            <Button 
            bgColor='bg-blue-600' 
            textColor='text-white'
            onClick = {()=> onChange('blue')}
            >Blue</Button>
            <Button 
            bgColor='bg-orange-600' 
            textColor='text-white'
            onClick = {()=> onChange('orange')}
            >Orange</Button>
            <Button 
            bgColor='bg-indigo-600' 
            textColor='text-white'
            onClick = {()=> onChange('indigo')}
            >Idigo</Button>
        </div>
      </div>
    </div>
  )
}

export default App
