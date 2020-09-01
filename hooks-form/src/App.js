import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import ResetHookCounter from './Components/ResetHookCounter';
import ObjectFormHooks from './Components/ObjectFormHooks';
import ArrayFormHooks from './Components/ArrayFormHooks';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/>*/}
      <HookCounter/> 
      <ResetHookCounter/>
      <ObjectFormHooks/>
      <ArrayFormHooks/>

    </div>
  );
}

export default App;
