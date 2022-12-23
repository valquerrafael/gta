import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/Student';
import { TrailContent } from '../model/TrailContent';
import { Trail } from '../model/Trail';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private API_URL = 'http://localhost:8080/api/students';

  constructor(private httpClient: HttpClient) {}

  login(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${this.API_URL}/login`, student);
  }

  createStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.API_URL, student);
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.API_URL}/${id}`);
  }

  changePassword(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${this.API_URL}/${id}/change-password`, student);
  }

  addScore(id: number, trailContent: TrailContent): Observable<Student> {
    return this.httpClient.put<Student>(`${this.API_URL}/${id}/add-score`, trailContent);
  }

  getStudentByCpf(cpf: string): Observable<Student> {
    return this.httpClient.get<Student>(`${this.API_URL}/get-by-cpf/${cpf}`);
  }

  deleteStudent(id: number): Observable<object> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }

  subscribeTrail(id: number, trail: Trail): Observable<Student> {
    return this.httpClient.put<Student>(`${this.API_URL}/${id}/subscribe-trail`, trail);
  }

  unsubscribeTrail(id: number, trail: Trail): Observable<Student> {
    return this.httpClient.put<Student>(`${this.API_URL}/${id}/unsubscribe-trail`, trail);
  }

  getTrails(id: number): Observable<Trail[]> {
    return this.httpClient.get<Trail[]>(`${this.API_URL}/${id}/trails`);
  }

  getRanking(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.API_URL}/ranking`);
  }

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.API_URL}/get-all`);
  }
}
