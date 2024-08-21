import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from '../utils/types';
// import { NgFor, NgIf } from '@angular/common';
// import { UserSignalComponent } from './user-signal/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [NgFor, NgIf, HeaderComponent, UserComponent, TasksComponent],
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser : User | undefined;

  onSelectUser(id: string) {
    this.selectedUser = DUMMY_USERS.find(u => u.id === id);
  }
}
