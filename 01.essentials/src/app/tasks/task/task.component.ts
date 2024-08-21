import { Component, Input } from '@angular/core';
import { TaskType } from '../../../utils/types';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task! : TaskType;

  constructor (private tasksService: TaskService) {}

  markComplete() {
    this.tasksService.removeTask(this.task.id);
  }
}
