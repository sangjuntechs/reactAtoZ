import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function userList() {
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

  return (
    <div>
      <div>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default userList;
