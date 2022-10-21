import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Teacher } from 'src/app/shared/model/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private URL_API = 'http://localhost:3000/teachers';

  constructor(private httpClient: HttpClient) {}

  insertTeacher(teacher: Teacher): Observable<Teacher> {
    return this.httpClient.post<Teacher>(this.URL_API, teacher)
  }

  getTeacher(id: number): Observable<Teacher> {
    return this.httpClient.get<Teacher>(`${this.URL_API}/${id}`);
  }

  updateTeacher(id: number, teacher: Teacher): Observable<Teacher> {
    return this.httpClient.put<Teacher>(`${this.URL_API}/${id}`, teacher);
  }

  deleteTeacher(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_API}/${id}`);
  }

  getAllTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(this.URL_API);
  }
}
