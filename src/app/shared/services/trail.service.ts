import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trail } from 'src/app/shared/model/Trail';
import { User } from '../model/User';
import { EntityService } from './entity.service';

@Injectable({
  providedIn: 'root'
})
export class TrailService extends EntityService<Trail> {
  override API = `${super.API}/trails`;

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  addStudent(id: number, student: User): Observable<Trail> {
    return this.httpClient.post<Trail>(`${this.API}/${id}/add-student`, student);
  }

  removeStudent(id: number, student: User): Observable<Trail> {
    return this.httpClient.post<Trail>(`${this.API}/${id}/remove-student`, student);
  }
}
