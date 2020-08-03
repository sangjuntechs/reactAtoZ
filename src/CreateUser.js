import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChage={onChange}
        value={username}
      />

      <input
        name="email"
        placeholder="이메일"
        onChage={onChange}
        value={email}
      />

      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;
