import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function TextField({ type, value, id, placeholder, name, onChange }) {
  return (
    <div>
        
      <input
        type={type || "text"}
        placeholder={placeholder}
        required
        name={name}
        id={id}
        className="bg-zinc-100 w-full p-4 rounded border-[2px] caret-dark-green focus:border-dark-green outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
