import React, { useEffect, useState, useMemo } from "react";
import { Groups, Task } from "../types/groups";

interface ProgressBarProps {
  data: Groups[];
}
export default function ProgressBar({ data }: ProgressBarProps) {
  const calculateProgressBarValue = () => {
    return data.reduce((acc: number, group: Groups) => {
      return (
        acc +
        group.tasks.reduce((groupAcc: number, task: Task) => {
          if (task.checked) {
            return groupAcc + task.percent;
          }
          return groupAcc;
        }, 0)
      );
    }, 0);
  };
  const [progress, setProgress] = useState(calculateProgressBarValue());
  const progressbarValue = useMemo(() => calculateProgressBarValue(), [progress]);

  useEffect(() => {
    setProgress(calculateProgressBarValue());
  }, [data]);

  const returnPercentage = () => {
    if (progressbarValue === 100) {
      return "100%";
    } else if (progressbarValue === 0) {
      return "";
    } else {
      return `${progressbarValue.toFixed(2)}%`;
    }
  };

  const progressBarWidth = `${progressbarValue.toFixed(2)}%`;
  const progressBarBackgroundColor = progressbarValue === 0 ? "bg-transparent" : "bg-custom-green";

  return (
    <div className="relative block h-[20px] w-full rounded-full bg-custom-light-green">
      <div
        style={{ width: progressBarWidth }}
        className={`${progressBarBackgroundColor} transition-width flex h-[20px] items-center justify-center rounded-full bg-custom-green pr-[10px] text-right text-xs leading-5 text-white duration-300`}
      >
        {returnPercentage()}
      </div>
    </div>
  );
}
