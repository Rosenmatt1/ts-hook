import React, { createContext, useContext, useState } from 'react';

// Create a context object with a default value
const MyContext = createContext({ count: 0, setCount: () => {} });

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    // Provide the state to the context provider
    <MyContext.Provider value={{ count, setCount }}>
      <div>
        <h1>Count: {count}</h1>
        <ChildComponent1 />
        <ChildComponent2 />
      </div>
    </MyContext.Provider>
  );
}

function ChildComponent1() {
  // Access the state from the context provider
  const { count, setCount } = useContext(MyContext);

  return (
    <div>
      <h2>Child Component 1</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function ChildComponent2() {
  // Access the state from the context provider
  const { count, setCount } = useContext(MyContext);

  return (
    <div>
      <h2>Child Component 2</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}