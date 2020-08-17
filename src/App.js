import React, { useRef, useState, useMemo } from "react";

import UserList from "./Userlist";
import CreateUser from "./CreateUser";


function countActiveUsers(users) {
  console.log('함수실행')
  return users.filter(user => user.active).length
}
function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "sangjun",
      email: "devjun0421@gmail.com",
      active: false,
    },
    {
      id: 2,
      username: "yujin",
      email: "diddnwls23@naver.com",
      active: false,
    },
    {
      id: 3,
      username: "anonymous",
      email: "anonymous@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수:{count}</div>
    </>
  );
}

export default App;
