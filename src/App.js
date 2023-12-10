
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Counter />
    </div>
  );
}

export default App;


const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);
  

  const handlePrevCount = () => {
    setCount(count - step);
    
  }

  const handleNxtCount = () => {
    setCount(count + step);
  }

  return (
    <div>
      <div className='ter'>
       <input type="range" min='1' max = '10' value={step} onChange={e => setStep(Number(e.target.value))} />
       <h3>Step: {step}</h3>
      </div>

      <div className='ter'>
        <button className='btn' onClick={handlePrevCount}>-</button>
        <input type="text" value={count} onChange={e => setCount(Number(e.target.value))} />
        <button className='btn' onClick={handleNxtCount}>+</button>
      </div>

      <div className='ter'>
        
        <h3>
          <span>{count === 0 ? "Today Is " : count > 0 ? `${count} Days From Today Is ` : `${Math.abs(count)} Days Ago Was `}</span>
          <span>{date.toDateString()}</span>
        </h3>
      </div>
    </div>
  );
}