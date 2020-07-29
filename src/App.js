import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputState';
import './App.css';

function App() {
  return (
    <Wrapper>
      <div className='hello_box'>
        <Hello name='sangjun' isSpecial={true}/>
      </div>
      <div className='hello_box'>
        <Hello isSpecial={false}/>
      </div>

      <Counter />
      <div className ='input'>
      <InputSample />
      </div>
    </Wrapper>
  
  );
}

export default App;
