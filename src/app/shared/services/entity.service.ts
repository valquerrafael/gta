import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URL } from "../Util";

@Injectable({
  providedIn: 'root'
})
export abstract class EntityService<T> {
  protected API = `${API_URL}`;

  constructor(private httpCliente: HttpClient) { }

  insert(entity: T): Observable<T> {
    return this.httpCliente.post<T>(this.API, entity);
  }

  get(id: number): Observable<T> {
    return this.httpCliente.get<T>(`${this.API}/${id}`);
  }

  update(id: number, entity: T): Observable<T> {
    return this.httpCliente.put<T>(`${this.API}/${id}`, entity);
  }

  delete(id: number): Observable<object> {
    return this.httpCliente.delete(`${this.API}/${id}`);
  }

  getAll(): Observable<T[]> {
    return this.httpCliente.get<T[]>(this.API);
  }
}
