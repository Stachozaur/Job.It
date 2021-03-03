import { Injectable } from '@angular/core';
import { Task } from './ITasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private taskUrl = 'api/tasks'

  constructor( private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl);
  }

  getSpecialistById(id: number): Observable<Task> {
    const url = `${this.taskUrl}/${id}`
    return this.http.get<Task>(url);
  }
}
