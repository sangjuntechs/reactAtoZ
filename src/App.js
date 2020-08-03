import React, { useRef, useState } from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputState";
import "./App.css";
import UserList from "./Userlist";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const users = [
    {
      id: 1,
      username: "sangjun",
      email: "devjun0421@gmail.com",
    },
    {
      id: 2,
      username: "yujin",
      email: "diddnwls23@naver.com",
    },
    {
      id: 3,
      username: "anonymous",
      email: "anonymous@example.com",
    },
  ];
  const nextId = useRef(4);

  const onCreate = () => {
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} />
    </>
  );
}

export default App;
