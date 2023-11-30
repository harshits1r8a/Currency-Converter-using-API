import { InputBox } from './components';
import { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmont, setConvertedAmount] = useState(0)
  const [fromLabel, setFromLabel] = useState('From')
  const [toLabel, setToLabel] = useState('To')

  const currencyInfo = useCurrencyInfo(from)
  // console.log(currencyInfo);

  const options = Object.keys(currencyInfo)
  // console.log(options);

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmont)
    setFromLabel(toLabel)
    setToLabel(fromLabel)
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to].toFixed(2))
  }

  return (
    <div 
      className="w-full h-screen flex flex-wrap justify-center items-center  bg-no-repeat bg-cover"
      style={{background:`url('https://images.unsplash.com/photo-1624953901718-e24ee7200b85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}
    >
      <div className="w-full max-w-md mx-auto border border-gray-300  rounded p-10 backdrop-blur-sm bg-white/30">
        <form 
          onSubmit={(e)=>{
            e.preventDefault();
            convert()
          }}
        >
          <div className='mb-1'>
            <InputBox 
            label={fromLabel}
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=> setFrom(currency)}
            onAmountChange={(amount)=> setAmount(amount)}
            selectCurrency={from}
            />
          </div>
          <div className='relative w-full h-0.5'>
            <button type='button'
            className="bg-blue-600 px-2 py-1 rounded border-2 border-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
            onClick={swap}>
              swap
            </button>
          </div>
          <div className='mt-1'>
            <InputBox 
            label={toLabel}
            amount={convertedAmont}
            currencyOptions={options}
            onCurrencyChange={(currency)=> setTo(currency)}
            selectCurrency={to}
            amountDisable
            />
          </div>

          <button
          type='submit'
          className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-6'>Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
        </form>
      </div>
    </div>
  );
}

export default App;
