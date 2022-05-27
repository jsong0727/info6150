import { useState } from 'react';
import Reorder from './Reorder';
import './app.css';

function App() {

  const [count, setCount] = useState(0);

  const increase = function() {
    setCount(count+1);
  };

  const decrease = function() {
    setCount(count-1);
  }

  const reOrder = function(){
    setCount(5);
  }

  return (
    <div className="app">
      <label >Inventory: {count}</label>
      <Reorder reOrder={reOrder} count={count} increase={increase} decrease={decrease}/>
    </div>
  );
}

export default App;
