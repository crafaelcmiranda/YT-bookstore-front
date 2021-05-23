import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaReadComponent } from './components/view/categoria/categoria-read/categoria-read.component';
import { HomeComponent } from './components/view/home/home.component';
import { LivroReadComponent } from './components/view/livro/livro-read/livro-read.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categorias', component: CategoriaReadComponent },
  { path: 'livros', component: LivroReadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
