import { DUMMY_TASKS } from "../app/dummy-tasks";
import { DUMMY_USERS } from "../app/dummy-users";

export type User = typeof DUMMY_USERS[0];
export type TaskType = typeof DUMMY_TASKS[0];
export type TaskFormData = {
    title: string,
    summary: string,
    dueDate: string,
  }