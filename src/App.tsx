import React from 'react';
import './App.css';
import ParentComponent from './Components/ParentComponent'

//App entry point, similar to index.html
function App() {

  // JSX is a syntax extention of functions
  function HelloWorld() { return (<h1>Hello world!</h1>) }
  // You can also render components with curly braces 
  const FizzBuzz = <h2>FizzBuzz</h2>;

  return (
    <div>
      <HelloWorld />
      {FizzBuzz}
      <ParentComponent />
    </div>
  );
}

export default App;
