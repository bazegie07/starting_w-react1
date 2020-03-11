import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponents';

function App() {
  return (
    <div className="App">
      <MyNewComponent someText={"Hello World"}/>
      <MyNewComponent someText={"this is second hello world"}/>
    </div>
  );
}

export default App;
