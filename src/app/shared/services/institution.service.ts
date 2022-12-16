import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institution } from 'src/app/shared/model/Institution';
import { Trail } from '../model/Trail';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  private readonly API_URL = 'http://localhost:8080/api/institutions';

  constructor(protected httpClient: HttpClient) {}

  login(email: string, password: string): Observable<Institution> {
    return this.httpClient.post<Institution>(`${this.API_URL}/login`, { email, password });
  }

  get(id: number): Observable<Institution> {
    return this.httpClient.get<Institution>(`${this.API_URL}/${id}`);
  }

  create(institution: Institution): Observable<Institution> {
    return this.httpClient.post<Institution>(`${this.API_URL}`, institution);
  }

  update(id: number, institution: Institution): Observable<Institution> {
    return this.httpClient.put<Institution>(`${this.API_URL}/${id}`, institution);
  }

  getTeachers(id: number): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.API_URL}/${id}/teachers`);
  }

  getStudents(id: number): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.API_URL}/${id}/students`);
  }

  getTrails(id: number): Observable<Trail[]> {
    return this.httpClient.get<Trail[]>(`${this.API_URL}/${id}/trails`);
  }
}
