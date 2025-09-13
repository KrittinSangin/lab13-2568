import { create } from "zustand";
import { type TaskFormState } from "../libs/Task";

export const useTaskFormStore = create<TaskFormState>((set) => ({
  title: "",
  description: "",
  dueDate: "",
  assignee: [],
  setTitle: (title) =>
    set(() => ({
      title: title,
    })),
  setDescription: (description) =>
    set(() => ({
      description: description,
    })),
  setDueDate: (dueDate) =>
    set(() => ({
      dueDate: dueDate,
    })),
    setAssignee: (assignee) => 
      set(() => ({
        assignee: assignee
      })),
  resetForm: () =>
    set({
      title: "",
      description: "",
      dueDate: "",
      assignee: [],
    }),
}));
