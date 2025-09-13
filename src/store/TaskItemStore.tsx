import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { type TaskItemProps } from "../libs/Task";

export const useTaskStore = create<TaskItemProps>((set) => ({
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"), 

  setTasks: (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
    set({ tasks });
  },

  addTask: (title, description, dueDate, assignee) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      assignee,
      dueDate,
      isDone: false,
      doneAt: null,
    };
    set((state) => {
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
      return { tasks: updatedTasks };
    });
  },

  toggleTask: (id) => {
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isDone: !task.isDone,
              doneAt: task.isDone ? null : new Date(),
              assignee: task.assignee,
            }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
      return { tasks: updatedTasks };
    });
  },

  removeTask: (id) => {
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
      return { tasks: updatedTasks };
    });
  },
}));
