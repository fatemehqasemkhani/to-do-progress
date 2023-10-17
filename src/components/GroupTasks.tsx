import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Collapse from "./Collapse";
import ProgressBar from "./ProgressBar";
import { Groups, Task } from "../types/groups";

interface GroupTasksProps {
  data: Groups[];
}
export default function GroupTasks({ data }: GroupTasksProps) {
  const [groupTasksData, setGroupTasksData] = useState<Groups[]>(data);

  useEffect(() => {
    // Calculate the total value
    const totalValue = data.reduce(
      (acc: number, group: Groups) =>
        acc + group.tasks.reduce((groupAcc: number, task: Task) => groupAcc + task.value, 0),
      0,
    );

    // Normalize the values to percentage and add id to groups and Tasks
    const normalizedData = data.map((group: Groups, index: number) => ({
      ...group,
      groupId: index + 1,
      tasks: group.tasks.map((task) => ({
        ...task,
        id: uuidv4(),
        percent: (task.value / totalValue) * 100,
      })),
    }));

    setGroupTasksData(normalizedData);
  }, [data]);

  const handleUpdateData = (updatedData: Groups[]) => {
    setGroupTasksData(updatedData);
  };

  return (
    <div className="m-2 w-[100%] rounded-lg border border-solid border-slate-300 bg-white p-5 md:w-[50%]">
      <div className="mb-[20px] px-[20px]">
        <h2 className="mx-auto mb-[20px] mt-[10px] text-lg font-bold">To Do Progress</h2>
        <ProgressBar data={groupTasksData} />
      </div>
      <Collapse handleUpdateData={handleUpdateData} data={groupTasksData} />
    </div>
  );
}
