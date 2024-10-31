// let count = 0;

const CounterWithFunc = () => {
  let count = 0;

  console.log(count);
  return <button onClick={() => (count += 1)}>{count}</button>;
};

export default CounterWithFunc;
