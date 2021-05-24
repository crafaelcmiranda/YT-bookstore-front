import { Categoria } from './../Categoria.model';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: ''
    , nome: ''
    , descricao: ''
  }


  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe(resposta => {
      this.categoria = resposta
    })
  }

  delete(): void {
    this.service.delete(this.categoria.id!).subscribe(resposta => {
      this.router.navigate(['categorias'])
      this.service.message('Categoria deletada com sucesso!')
    }, err => {
      this.service.message(err.error.error)
    })
  }
}
