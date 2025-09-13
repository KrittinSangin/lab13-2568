interface TaskProps {
  id: string;
  title: string;
  description: string;
  dueDate: string | null;
  isDone: boolean;
  doneAt: Date | null;
  assignee: string[] | null;
}
export type { TaskProps }

interface TaskItemProps {
  tasks: TaskProps[];
  setTasks: (tasks: TaskProps[]) => void;
  addTask: (
    title: string,
    description: string,
    dueDate: string | null,
    assignee: string[] | null,
  ) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}
export type { TaskItemProps }

interface TaskFormState {
  title: string,
  description: string,
  dueDate: string | null,
  assignee: string[] | null,
  setAssignee: (assignee: string[] | null) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setDueDate: (dueDate: string | null) => void;
  resetForm: () => void;
}
export type { TaskFormState }