import React from 'react';
import { useState } from 'react';
import '../../style.css';

const AddUser = () => {
  const [value, setValue] = useState({
    fullName: '',
    email: '',
    gender: '',
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
      <form className="register" onSubmit={handleSubmit}>
        <label>fullName</label>
        <input
          name="fullName"
          placeholder="fullName"
          onChange={onChange}
          required
          pattern="^[a-zA-Z].*"
          errorMessage=""
        />
        <label>email</label>
        <input name="email" placeholder="email" onChange={onChange} />

        <label>gender</label>
        <input
          name="gender"
          placeholder="gender"
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
export default AddUser;
