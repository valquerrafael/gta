import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/User';
import { Trail } from '../model/Trail';
import { EntityService } from './entity.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends EntityService<User> {
  override API = `${super.API}/users`;

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  addTrail(id: number, trail: Trail): Observable<User> {
    return this.httpClient.post<User>(`${this.API}/${id}/add-trail`, trail);
  }

  removeTrail(id: number, trail: Trail): Observable<User> {
    return this.httpClient.post<User>(`${this.API}/${id}/remove-trail`, trail);
  }
}
