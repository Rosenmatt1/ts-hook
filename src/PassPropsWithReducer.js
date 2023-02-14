// import React, { useReducer } from 'react';

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

// function ParentComponent() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h1>Count: {state.count}</h1>
//       <ChildComponent1 count={state.count} dispatch={dispatch} />
//       <ChildComponent2 count={state.count} dispatch={dispatch} />
//     </div>
//   );
// }

// function ChildComponent1({ count, dispatch }) {
//   return (
//     <div>
//       <h2>Child Component 1</h2>
//       <p>Count: {count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//     </div>
//   );
// }

// function ChildComponent2({ count, dispatch }) {
//   return (
//     <div>
//       <h2>Child Component 2</h2>
//       <p>Count: {count}</p>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// }





