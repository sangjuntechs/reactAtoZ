import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <div className='hello_box'>
        <Hello name='sangjun'/>
      </div>
    </Wrapper>
  );
}

export default App;
