import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { type TaskItemProps } from "../libs/Task";

export const useTaskStore = create<TaskItemProps>((set) => ({
  tasks: [], //เริ่มต้น
  setTasks: (tasks) => set({ tasks }),
  addTask: (title, description, dueDate, assignee) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: uuidv4(),
          title,
          description,
          assignee,
          dueDate,
          isDone: false,
          doneAt: null,
        },
      ],
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isDone: !task.isDone,
              doneAt: task.isDone ? null : new Date(),
              assignee: task.assignee
            }
          : task
      ),
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));
