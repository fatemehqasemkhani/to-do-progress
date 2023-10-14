import React from "react";
import { Task } from "../types/groups";
interface CheckboxProps {
  data: Task;
  handleChange: (id: string) => void;
}
export default function Checkbox({ data, handleChange }: CheckboxProps) {
  const { checked, value, id, description } = data;
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        value={value}
        onChange={() => handleChange(id)}
        className="h-[16px] w-[16px] cursor-pointer rounded border-gray-300 bg-white text-custom-green focus:ring-0"
      />
      <label className="inline-block font-light text-sm pl-[15px]">{description}</label>
    </div>
  );
}
