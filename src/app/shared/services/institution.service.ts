import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institution } from 'src/app/shared/model/Institution';
import { User } from '../model/User';
import { EntityService } from './entity.service';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService extends EntityService<Institution> {
  override API = `${super.API}/institutions`;

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  addTeacher(id: number, teacher: User): Observable<Institution> {
    return this.httpClient.post<Institution>(`${this.API}/${id}/add-teacher`, teacher);
  }

  removeTeacher(id: number, teacher: User): Observable<Institution> {
    return this.httpClient.post<Institution>(`${this.API}/${id}/remove-teacher`, teacher);
  }

  addStudent(id: number, student: User): Observable<Institution> {
    return this.httpClient.post<Institution>(`${this.API}/${id}/add-student`, student);
  }

  removeStudent(id: number, student: User): Observable<Institution> {
    return this.httpClient.post<Institution>(`${this.API}/${id}/remove-student`, student);
  }
}
