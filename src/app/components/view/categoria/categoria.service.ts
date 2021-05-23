import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './Categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: string = "https://crafaelcmiranda-bookstore-api.herokuapp.com/"
  constructor(private http: HttpClient) { }

  findAll(): Observable<Categoria[]> {
    const url: string = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  }
}
