import React, { useState } from "react";
import { Button, TextField } from "../components/ui";
import { postData } from "../utils/fetchData";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";

export default function PasswordReset() {
  const {setLoader} = useAppContext()
  const [value, setValue] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoader(true)
    
    postData("rest-auth/password/reset/", {value}).then((response)=>{
      setLoader(false)
      console.log(response);
    }).catch((error)=>{
      console.log(error);
      toast.error("An error occured, could not reset password")
      setLoader(false)
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          type={"email"}
          name={"email"}
          placeholder={"registered email"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type={"submit"} disabled={!value}>Reset</Button>
      </form>
    </div>
  );
}
