import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-page/home/home.component';
import { NoticiasIndexComponent } from './components/noticias/noticias-index/noticias-index.component';
import { SeleccionCategoriaComponent } from './components/preguntas/seleccion-categoria/seleccion-categoria.component';
import {FuncionariosComponent} from "./components/funcionarios/funcionarios.component";
import {AgregarPreguntaComponent} from "./components/mantenedor/agregar-pregunta/agregar-pregunta.component";
import {AgregarFuncionarioComponent} from "./components/mantenedor/agregar-funcionario/agregar-funcionario.component";
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'noticias', component: NoticiasIndexComponent},
  {path: 'preguntas', component:SeleccionCategoriaComponent},
  {path: 'funcionarios', component:FuncionariosComponent},
  {path: 'agregar-preguntas', component:AgregarPreguntaComponent},
  {path: 'agregar-funcionarios', component:AgregarFuncionarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
