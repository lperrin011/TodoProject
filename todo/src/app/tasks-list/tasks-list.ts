import { Component, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskComponent } from './task/task';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task-service/task-service';
import { AddTask } from './add-task/add-task';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskComponent, CommonModule, AddTask],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.scss'
})
export class TasksListComponent implements OnInit {
  tasks!: Task[];

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    //récupérer les taches en db
    //this.tasks = [{description : "My first task", isDone : false}, {description : "My second task", isDone : false}]; 
    this.taskService.getAllTasks().subscribe(data => {
      this.tasks = data;
      console.log(this.tasks);
    }
    )
  }

  addTask(description: string){
    console.log("description in list "+description)
    this.taskService.addNewTask(new Task(null, description, false)).subscribe({
      next: newTask => {
        console.log("new task : " + newTask);
        this.tasks = [...this.tasks, newTask];
      }
    })
  }

  updateTask(task: Task){
    this.taskService.updateTask(task).subscribe({
      next: updated => {
        task = updated;
      },
    });  
  }

  deleteTask(task : Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(x => x.id !== task.id);
    });
  }
}
