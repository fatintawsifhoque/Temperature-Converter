import { ArrowLeftRight } from 'lucide-react';
import { useState } from 'react';

const App = () => {
  const [celsius, setCelsius] = useState(null);
  const [fahrenheit, setFahrenheit] = useState(null);

  const updateFahrenheit = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setCelsius(null);
      setFahrenheit(null);
      return;
    }
    setCelsius(val);
    setFahrenheit((val * 9/5) + 32);
  };

  const updateCelsius = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setCelsius(null);
      setFahrenheit(null);
      return;
    }
    setFahrenheit(val);
    setCelsius((val - 32) * 5/9);
  };

  return (
    <section className="h-screen w-screen bg-cyan-100 flex items-center justify-center gap-10">
      <div>
        <label htmlFor="celsius" className="text-lg font-bold">Celsius:</label> <br/>
        <input 
          type="number" 
          id="celsius" 
          className="border h-10 w-40 outline-0 pl-2 rounded-lg" 
          onChange={updateFahrenheit}
          value={celsius ?? ''} 
        />
      </div>
      <ArrowLeftRight />
      <div>
        <label htmlFor="fahrenheit" className="text-lg font-bold">Fahrenheit:</label> <br/>
        <input 
          type="number" 
          id="fahrenheit" 
          className="border h-10 w-40 outline-0 pl-2 rounded-lg"
          onChange={updateCelsius}
          value={fahrenheit ?? ''}
        />
      </div>
    </section>
  );
};

export default App;