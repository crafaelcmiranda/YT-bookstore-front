import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../Categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livro', 'acoes'];

  categorias: Categoria[] = []

  constructor(
    private service: CategoriaService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      this.categorias = resposta
    })
  }
  create(): void {
    this.router.navigate(["categorias/create"])
  }

}
