import React, { useState, useRef } from "react";


function InputSample() {
  const onInput = useRef();
  const [input, setInput] = useState({
    name: "",
    nickname: "",
  });
  const { name, nickname } = input;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };
  const onReset = () => {
    setInput({
      name: "",
      nickname: "",
    });
    onInput.current.focus();
  };
  return (
    <div>
      <input 
        name="name" 
        placeholder="이름" 
        onChange={onChange} 
        value={name}
        ref={onInput} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>이름: </b>
        {name}
        <br/>
        <b>닉네임: </b>
        {nickname}
      </div>
    </div>
  );
}

export default InputSample;
