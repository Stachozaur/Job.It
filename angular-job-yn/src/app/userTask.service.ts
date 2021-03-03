import { Injectable } from '@angular/core';
import { UserTask } from './userTask';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { error } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class UserTaskService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private userTaskUrl = 'api/home'

  constructor(
    private http: HttpClient) { }

  getUserTasks(): Observable<UserTask[]> {
    return this.http.get<UserTask[]>(this.userTaskUrl);
  }

  getUserTaskById(id: number): Observable<UserTask> {
    const url = `${this.userTaskUrl}/${id}`
    return this.http.get<UserTask>(url);
  }
}
