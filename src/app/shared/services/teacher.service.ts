import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../model/Teacher';
import { Trail } from '../model/Trail';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private API_URL = 'http://localhost:8080/api/teachers';

  constructor(private httpClient: HttpClient) {}

  login(teacher: Teacher): Observable<Teacher> {
    return this.httpClient.post<Teacher>(`${this.API_URL}/login`, teacher);
  }

  createTeacher(teacher: Teacher): Observable<Teacher> {
    return this.httpClient.post<Teacher>(this.API_URL, teacher);
  }

  getTeacherById(id: number): Observable<Teacher> {
    return this.httpClient.get<Teacher>(`${this.API_URL}/${id}`);
  }

  changePassword(id: number, teacher: Teacher): Observable<Teacher> {
    return this.httpClient.put<Teacher>(`${this.API_URL}/${id}/change-password`, teacher);
  }

  getTeacherByCpf(cpf: string): Observable<Teacher> {
    return this.httpClient.get<Teacher>(`${this.API_URL}/get-by-cpf/${cpf}`);
  }

  deleteTeacher(id: number): Observable<object> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }

  createTrail(id: number, trail: Trail): Observable<Teacher> {
    return this.httpClient.put<Teacher>(`${this.API_URL}/${id}/create-trail`, trail);
  }

  deleteTrail(id: number, trail: Trail): Observable<Teacher> {
    return this.httpClient.put<Teacher>(`${this.API_URL}/${id}/delete-trail`, trail);
  }

  getTrails(id: number) {
    return this.httpClient.get<Teacher>(`${this.API_URL}/${id}/trails`);
  }
}
