import React from 'react';
import { useState } from 'react';
import '../../style.css';
const Register = () => {
  const [value, setValue] = useState({
    userName: '',
    password: '',
  });
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div className="all">
      <form className="login" onSubmit={handleSubmit}>
        <label>userName</label>
        <input
          name="userName"
          placeholder="userName"
          onChange={onChange}
          required
          pattern="^[a-zA-Z].*"
        />

        <label>password</label>
        <input
          name="password"
          placeholder="password"
          onChange={onChange}
          required
          pattern="^[a-zA-Z].*"
        />

        <button>login</button>
      </form>
    </div>
  );
};
export default Register;
