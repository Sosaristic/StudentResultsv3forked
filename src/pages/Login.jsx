import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import TextField from "../components/ui/TextField";
import { Button } from "../components/ui";

function Login() {
  const { signIn, getToken } = useAuthentication();
  const [userValues, setUserValues] = useState({
    username: "2020120",
    password: "Coro@1Auth",
  });

  const handleOnchange = ({ target: { name, value } }) => {
    setUserValues({
      ...userValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
	
    signIn(userValues);
  };

  const token = getToken();
  console.log(token);
  if (token) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          type={"text"}
          placeholder={"username"}
          name={"username"}
          value={userValues.username}
          onChange={handleOnchange}
        />

        <TextField
          type={"password"}
          placeholder={"password"}
          name={"password"}
          value={userValues.password}
          onChange={handleOnchange}
        />

       <Button type={"submit"} disabled={!userValues.username || !userValues.password}>Login</Button>
        <div className="flex flex-col">
          <Link to="/reset-password" className="text-amber-600">
            Forgot Password?
          </Link>
          <p>
            New here?{" "}
            <Link to="/register" className="text-amber-600">
              Create your account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
