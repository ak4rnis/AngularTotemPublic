import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-page/home/home.component';
import { NoticiasIndexComponent } from './components/noticias/noticias-index/noticias-index.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'noticias', component: NoticiasIndexComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
