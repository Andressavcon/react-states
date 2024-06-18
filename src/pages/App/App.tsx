import { useState } from 'react';
import { Counter } from '../../components/Counter';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <Counter counter={counter} setCounter={setCounter} />
    </>
  );
}

export default App;
