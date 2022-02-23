import React, { useState } from "react";

import "./Login.css";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const handleChange = (event) => {
    const { id, value } = event.target;
    setInputs({ ...inputs, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      <h2 className="text-center"> Login</h2>
      <form className="form-control">

        <div>
          <input
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="btn-control">
          <button className="btn btn-success btn-block">Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
