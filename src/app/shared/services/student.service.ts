import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/shared/model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private URL_API = 'http://localhost:3000/students';

  constructor(private httpClient: HttpClient) {}

  insertStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.URL_API, student);
  }

  getStudent(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.URL_API}/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${this.URL_API}/${id}`, student);
  }

  deleteStudent(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_API}/${id}`);
  }

  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.URL_API);
  }
}
