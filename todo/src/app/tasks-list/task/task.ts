import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task',
  imports: [FormsModule, MatIconModule, MatButtonModule
  ],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() updatedTask = new EventEmitter;
  @Output() deleteTask = new EventEmitter;
  
  ngOnInit(): void {
  }

  updateDescription(event: Event) {
    this.task.description = (event.target as HTMLInputElement).value;
    this.updateTask();
  }

  updateTask() {
    this.updatedTask.emit(this.task);
  }

  onDelete() {
    this.deleteTask.emit(this.task);
  }

}
