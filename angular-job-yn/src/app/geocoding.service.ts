import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private mapsUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='
  private apiKey = '&key=AIzaSyB2NyJo8nmwODZm5IDASbhGBEngXkXsMus'
  constructor(private http: HttpClient) { }
  
  getLatLong(address: string) : Observable<any>{
    return this.http.get(`${this.mapsUrl}${address}${this.apiKey}`)
  }


}
