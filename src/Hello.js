import React from 'react';
import './Hello.css';

function Hello(props) {
    return (
        <div className='index_box'>
            <div>Hello world! This is 'React' App</div>
            <div>practice react by '{props.name}'</div>
        </div>
    );
}

Hello.defaultProps = {
    name: 'Anonymous'
}
export default Hello;