import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
  useEffect( () => {
    console.log(user)
    return () => {
      console.log('user의 이전상태',{user})
    }
  }, [user])
  return (
    <div>
      <b style ={{
        color: user.active ? 'dodgerblue' : 'black',
        cursor: 'pointer'
      }} onClick={() => onToggle(user.id)}>
        {user.username}</b> <span style ={{
          color: user.active ? 'dodgerblue' : 'black'
        }}>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

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

export default React.memo(userList);
