import { Component, signal } from '@angular/core';
import { TasksListComponent } from './tasks-list/tasks-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    TasksListComponent
  ]
})
export class App {
}
