import React, { useState } from "react";
import { Button, TextField } from "../components/ui";

export default function PasswordReset() {
  const [value, setValue] = useState("");
  const handleSubmit = ()=>{
    console.log(value);
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
