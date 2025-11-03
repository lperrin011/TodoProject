import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';

@Injectable({
  providedIn: 'root'

})
export class TaskService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {} 

  getAllTasks() : Observable<Task[]> {
    const url = this.apiUrl + '/todo';
    return this.http.get<Task[]>(url);
  }

  addNewTask(task : Task) : Observable<Task> {
    const url = this.apiUrl + '/todo';
    return this.http.post<Task>(url, task);
  }

  updateTask(task: Task) : Observable<Task> {
    const url = `${this.apiUrl}/todo/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  deleteTask(task: Task) {
    const url = `${this.apiUrl}/todo/${task.id}`;
    return this.http.delete(url);
  }
}
