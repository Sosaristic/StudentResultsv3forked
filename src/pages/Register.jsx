import React, { useState } from "react";
import TextField from "../components/ui/TextField";
import { Button } from "../components/ui";

export default function Register() {
  const [registerValues, setRegisterValues] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleOnChange = ({ target: { name, value } }) => {
    setRegisterValues({
      ...registerValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerValues);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          type={"text"}
          name={"username"}
          placeholder={"username"}
          value={registerValues.username}
          onChange={handleOnChange}
        />
        <TextField
          type={"email"}
          name={"email"}
          placeholder={"Valid email address"}
          value={registerValues.email}
          onChange={handleOnChange}
        />
        <TextField
          type={"password"}
          name={"password1"}
          placeholder={"password"}
          value={registerValues.password1}
          onChange={handleOnChange}
        />
        <TextField
          type={"password"}
          name={"password2"}
          placeholder={"Confirm Password"}
          value={registerValues.password2}
          onChange={handleOnChange}
        />
        <Button
          type={"submit"}
          disabled={!registerValues.password1 || !registerValues.password2 || !registerValues.email || !registerValues.username}
        >
          Register
        </Button>
      </form>
    </div>
  );
}
