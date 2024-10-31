import { useState } from 'react';

const CounterWithStateHook = () => {
  const [count, setCount] = useState(0);
  console.log('render');
  return <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>;
};

export default CounterWithStateHook;
