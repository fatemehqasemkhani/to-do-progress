import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    setProgress(calculateProgressBarValue());
  }, [data]);

  const returnPercentage = () => {
    if (progress === 100) {
      return "100%";
    } else if (progress === 0) {
      return "";
    } else {
      return `${progress.toFixed(2)}%`;
    }
  };

  const progressBarWidth = `${progress.toFixed(2)}%`;
  const progressBarBackgroundColor = progress === 0 ? "bg-transparent" : "bg-custom-green";

  return (
    <div className="h-[20px] relative block w-full rounded-full bg-custom-light-green">
      <div
        style={{ width: progressBarWidth }}
        className={`${progressBarBackgroundColor} text-right text-white text-xs leading-5 pr-[10px] transition-width duration-300 flex items-center justify-center rounded-full h-[20px] bg-custom-green`}
      >
        {returnPercentage()}
      </div>
    </div>
  );
}
