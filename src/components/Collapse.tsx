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

  return (
    <div className="rounded-lg border">
      {data.map((group: Groups) => (
        <div key={group.groupId} className="border-b last:border-b-0">
          <button
            className={`${
              activeKey === group.groupId ?? "text-custom-green"
            } flex w-full items-center justify-between rounded-lg bg-white p-4 text-left text-base font-light transition duration-300 hover:bg-white`}
            onClick={() => onChange(group.groupId)}
          >
            <span className="flex items-center">
              <LiaClipboardListSolid className="mr-[10px]" size={20} />
              {group.name}
            </span>
            <span className="flex items-center text-sm text-gray-400">
              {activeKey === group.groupId ? "Show" : "Hide"}
              <FiChevronDown
                className={`ml-[5px]${
                  activeKey === group.groupId ? "rotate-180" : "rotate-0"
                } duration-500 transition-transform`}
                size={20}
              />
            </span>
          </button>
          <div
            className={`duration-300 overflow-hidden transition-[max-height] ease-in ${
              activeKey === group.groupId ? "max-h-80" : "max-h-0"
            }`}
          >
            {group.tasks.map((task: Task) => (
              <div key={task.id} className="my-[20px] bg-white px-[20px]">
                <Checkbox data={task} handleChange={handleUpdateTask} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
