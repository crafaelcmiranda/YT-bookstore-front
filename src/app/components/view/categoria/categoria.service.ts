import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Categoria } from './Categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: string = "https://crafaelcmiranda-bookstore-api.herokuapp.com/"
  url: string = `${this.baseUrl}/categorias`
  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar
  ) { }

  findAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url)
  }

  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.url, categoria)
  }

  message(msg: String): void {
    this._snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
