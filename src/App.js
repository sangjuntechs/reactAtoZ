import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';

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
    </Wrapper>
  
  );
}

export default App;
