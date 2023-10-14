import React, { useState, useCallback } from "react";
import { FiChevronDown } from "react-icons/fi";
import { LiaClipboardListSolid } from "react-icons/lia";
import Checkbox from "./Checkbox";
import { Groups, Task } from "../types/groups";

/* eslint-disable  @typescript-eslint/no-explicit-any */
interface CollapseProps {
  data: any;
  handleUpdateData: (data: Groups[]) => void;
}
export default function Collapse({ data, handleUpdateData }: CollapseProps) {
  const [activeKey, setActiveKey] = useState<number>(0);

  const onChange = (index: number) => {
    setActiveKey(index === activeKey ? 0 : index);
  };

  const handleUpdateTask = useCallback(
    (taskId: string) => {
      const updatedData = data.map((group: Groups) => ({
        ...group,
        tasks: group.tasks.map((task: Task) =>
          task.id === taskId ? { ...task, checked: !task.checked } : task,
        ),
      }));

      handleUpdateData(updatedData);
    },
    [data, handleUpdateData],
  );

  return data.map((group: Groups) => (
    <div key={group.groupId} className="border border-b-0 last:border-b">
      <button
        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-white font-light text-base transition duration-300"
        onClick={() => onChange(group.groupId)}
      >
        <span className="flex items-center">
          <LiaClipboardListSolid className="mr-[10px]" size={20} />
          {group.name}
        </span>
        <span className="flex items-center text-sm text-gray-400">
          {activeKey === group.groupId ? "Show" : "Hide"}
          <FiChevronDown
            className={`ml-[5px] transform ${
              activeKey === group.groupId ? "rotate-180" : "rotate-0"
            } transition-transform duration-600`}
            size={20}
          />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in ${
          activeKey === group.groupId ? "max-h-80" : "max-h-0"
        }`}
      >
        {group.tasks.map((task: Task) => (
          <div key={task.id} className="my-[20px] px-[20px] bg-white">
            <Checkbox data={task} handleChange={handleUpdateTask} />
          </div>
        ))}
      </div>
    </div>
  ));
}
