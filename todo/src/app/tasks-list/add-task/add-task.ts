import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task-service/task-service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTask {
  @Output() addedTask = new EventEmitter;

  constructor(){ }

  onEnter(event: Event){
    const input = (event.target as HTMLInputElement);
    const description = input.value;
    this.addedTask.emit(description); //on envoie au composant parent qui va traiter les données

    input.value = '';

  }
}
