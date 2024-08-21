import { Injectable } from "@angular/core";
import { TaskFormData } from "../../utils/types";
import { DUMMY_TASKS } from "../dummy-tasks";

@Injectable({providedIn: 'root'})
export class TaskService {
    
    private tasks = DUMMY_TASKS;

    getUserTasks(userId: string) {
        return this.tasks.filter(t => t.userId === userId);
    }

    addTask(formData: TaskFormData, userId: string) {
        this.tasks.unshift({
            ...formData,
            userId,
            id: new Date().getTime().toString()
        })
    }

    removeTask(id: string) {
        const i = this.tasks.findIndex(t => t.id === id);
        if (i > -1) 
            this.tasks.splice(i, 1);
    }
}