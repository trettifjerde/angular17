import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../../utils/types';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) selectedUser! : User;
  isTaskFormVisible = false;
  
constructor(private tasksService: TaskService) { }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUser.id);
  }

  setTaskFormVisible(flag: boolean) {
    this.isTaskFormVisible = flag;
  }
}
