import React from 'react';
import { useState } from 'react';
import '../../style.css';

const Register = () => {
  const [value, setValue] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div className="all" >
      <form className="register" onSubmit={handleSubmit}>
        <label>userName</label>
        <input
          name="userName"
          placeholder="userName"
          onChange={onChange}
          required
          pattern="^[a-zA-Z].*"
          errorMessage=""
        />
        <label>email</label>
        <input name="email" placeholder="email" onChange={onChange} />

        <label>password</label>
        <input
          name="password"
          placeholder="password"
          onChange={onChange}
          required
          pattern="^[a-zA-Z].*"
          errorMessage=""
        />
        <label>confirmPassword</label>
        <input
          name="confirmPassword"
          placeholder="confirmPassword"
          onChange={onChange}
          required
          pattern="^[a-zA-Z].*"
          errorMessage=""
        />
        <button>submit</button>
      </form>
    </div>
  );
};
export default Register;
