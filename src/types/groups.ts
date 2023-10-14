export interface Task {
  description: string;
  checked: boolean;
  id: string;
  value: number;
  percent: number;
}

export interface Groups {
  groupId: number;
  name: string;
  tasks: Task[];
}
