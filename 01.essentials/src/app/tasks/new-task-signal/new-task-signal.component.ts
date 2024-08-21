import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-new-task-signal',
  standalone: true,
  imports: [],
  templateUrl: './new-task-signal.component.html',
  styleUrl: './new-task-signal.component.css'
})
export class NewTaskSignalComponent {
  userId = input.required<string>();
  cancel = output();

  onCancel() {
    this.cancel.emit();
  }
}
