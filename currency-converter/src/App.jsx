import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components';

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
    console.log("To--->",to,"from->",from , "convertedAmount-->",convertedAmount,"amount-->",amount);
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div className='h-screen w-full flex justify-center items-center' 
    style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',background:"url('https://images.pexels.com/photos/25626514/pexels-photo-25626514/free-photo-of-root-node-problems.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}}>

      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>

          <h1 className='text-2xl text-white text-center mb-3 text-blue-700 font-bold'>Currency Converter</h1>

        <form onSubmit={(e)=>{
          e.preventDefault()
          convert()
          }}>

          <div className='w-full mb-1'>
            <InputBox
              label="From: "
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency)=> setFrom(currency) }
              onAmountChange={(amount)=>setAmount(amount)}
              selectedCurrency={from}
            />
          </div>

          <button
            className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
            onClick={swap}
          >
            Swap
          </button>

          <div className='w-full mb-1'>
            <InputBox
              label="To:"
              currencyOptions={options}
              amount={convertedAmount}
              onCurrencyChange={(currency)=> setTo(currency) }
              selectedCurrency={to}
              amountDisabled= {true}
            />
          </div>

          <button 
          className='bg-white px-4 py-2 rounded-full mx-auto block mt-4 duration-200 hover:bg-blue-700 hover:text-white' type='submit'>
            Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>

          </form>


      </div>


    </div>
  )
}

export default App
