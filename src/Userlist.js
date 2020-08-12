import React from "react";

function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b style ={{
        color: user.active ? 'dodgerblue' : 'black',
        cursor: 'pointer'
      }} onClick={() => onToggle(user.id)}>
        {user.username}</b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function userList({ users, onRemove, onToggle }) {
  

  return (
    <div>
      <div>
        {users.map((user) => (
          <User key={user.id}
           user={user}
           onRemove = {onRemove}
           onToggle = {onToggle} />
        ))}
      </div>
    </div>
  );
}

export default userList;
