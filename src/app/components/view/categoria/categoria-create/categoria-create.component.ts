import { Router } from '@angular/router';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Categoria.model';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }
  constructor(
    private service: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  create(): void {
    console.log('chegou aqui')
    this.service.create(this.categoria).subscribe(resposta => {
      this.router.navigate(['categorias'])
      this.service.message('Categoria criada com sucesso!')
    })
  }

}
