import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trail } from 'src/app/shared/model/Trail';

@Injectable({
  providedIn: 'root'
})
export class TrailService {
  private readonly API_URL = 'http://localhost:8080/api/trails';

  constructor(private httpClient: HttpClient) {}

  get(id: number): Observable<Trail> {
    return this.httpClient.get<Trail>(`${this.API_URL}/${id}`);
  }

  update(id: number, trail: Trail): Observable<Trail> {
    return this.httpClient.put<Trail>(`${this.API_URL}/${id}`, trail);
  }
}
