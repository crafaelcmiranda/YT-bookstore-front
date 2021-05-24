import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './components/view/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/view/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/view/categoria/categoria-read/categoria-read.component';
import { HomeComponent } from './components/view/home/home.component';
import { LivroReadComponent } from './components/view/livro/livro-read/livro-read.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categorias', component: CategoriaReadComponent },
  { path: 'categorias/create', component: CategoriaCreateComponent },
  { path: 'categorias/delete/:id', component: CategoriaDeleteComponent },
  { path: 'livros', component: LivroReadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
