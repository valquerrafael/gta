import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institution } from 'src/app/model/Institution';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  private URL_API = 'http://localhost:3000/institutions';

  constructor(private httpClient: HttpClient) {}

  insertInstitution(institution: Institution): Observable<Institution> {
    return this.httpClient.post<Institution>(this.URL_API, institution);
  }

  getInstitution(id: number): Observable<Institution> {
    return this.httpClient.get<Institution>(`${this.URL_API}/${id}`);
  }

  updateInstitution(id: number, institution: Institution): Observable<Institution> {
    return this.httpClient.put<Institution>(`${this.URL_API}/${id}`, institution);
  }

  deleteInstitution(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_API}/${id}`);
  }

  getAllInstitutions(): Observable<Institution[]> {
    return this.httpClient.get<Institution[]>(this.URL_API);
  }
}
