import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/User';
import { Trail } from '../model/Trail';
import { Role } from '../Util';

@Injectable({
  providedIn: 'root'
})
export abstract class UserService {
  private readonly API_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient, userRole: Role) {
    this.API_URL += `${userRole}s`;
  }

  login(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${this.API_URL}/login`, { email, password });
  }

  get(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.API_URL}/${id}`);
  }

  update(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.API_URL}/${id}`, user);
  }

  getTrails(id: number): Observable<Trail[]> {
    return this.httpClient.get<Trail[]>(`${this.API_URL}/${id}/trails`);
  }
}
