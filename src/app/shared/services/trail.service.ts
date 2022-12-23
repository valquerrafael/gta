import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Trail } from '../model/Trail';
import { TrailContent } from '../model/TrailContent';
import { Student } from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class TrailService {

  private API_URL = 'http://localhost:8080/api/trails';

  constructor(private httpClient: HttpClient) {}

  getTrailById(id: number): Observable<Trail> {
    return this.httpClient.get<Trail>(`${this.API_URL}/${id}`);
  }

  createContent(id: number, trailContent: TrailContent): Observable<Trail> {
    return this.httpClient.put<Trail>(`${this.API_URL}/${id}/create-content`, trailContent);
  }

  deleteContent(id: number, trailContent: TrailContent): Observable<Trail> {
    return this.httpClient.put<Trail>(`${this.API_URL}/${id}/delete-content`, trailContent);
  }

  getStudents(id: number): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.API_URL}/${id}/students`);
  }

  getAll(): Observable<Trail[]> {
    return this.httpClient.get<Trail[]>(`${this.API_URL}/get-all`);
  }
}
