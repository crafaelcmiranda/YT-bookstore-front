import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];

  categorias: Categoria[] = []

  constructor(private service: CategoriaService) { }
  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.categorias = resposta
    })
  }

  ngOnInit(): void {
    this.findAll();
  }

}
