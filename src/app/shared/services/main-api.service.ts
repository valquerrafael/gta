import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institution } from '../model/Institution';
import { Trail } from '../model/Trail';
import { User } from '../model/User';
import { Role } from '../Util';

@Injectable({
  providedIn: 'root'
})
export class MainApiService {
  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  teacherRegister(teacher: User): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/teacher-register`, teacher);
  }

  removeTeacher(institutionId: number, teacherId: number): Observable<Institution> {
    return this.http.post<Institution>(`${this.API_URL}/institutions/${institutionId}/remove-teacher`, teacherId);
  }

  studentRegister(student: User): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/student-register`, student);
  }

  removeStudent(institutionId: number, studentId: number): Observable<Institution> {
    return this.http.post<Institution>(`${this.API_URL}/institutions/${institutionId}/remove-student`, studentId);
  }

  deleteInstitution(id: number): Observable<object> {
    return this.http.delete(`${this.API_URL}/institutions/${id}`);
  }

  createTrail(trail: Trail, teacherId: number): Observable<Trail> {
    return this.http.post<Trail>(`${this.API_URL}/teachers/${teacherId}/create-trail`, trail);
  }

  deleteTrail(teacherId: number, trailId: number): Observable<Trail> {
    return this.http.post<Trail>(`${this.API_URL}/teachers/${teacherId}/delete-trail`, trailId);
  }

  subscribeTrail(studentId: number, trailId: number): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/students/${studentId}/subscribe-trail`, trailId);
  }

  unsubscribeTrail(studentId: number, trailId: number): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/students/${studentId}/unsubscribe-trail`, trailId);
  }
}
