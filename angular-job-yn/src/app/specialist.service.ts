import { Injectable } from '@angular/core';
import { Specialist } from './specialist';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private specialistUrl = 'api/specialists'

  constructor(
    private http: HttpClient) { }

  getSpecialists(): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(this.specialistUrl);
  }

  getSpecialistById(id: number): Observable<Specialist> {
    const url = `${this.specialistUrl}/${id}`
    return this.http.get<Specialist>(url);
  }
}
