import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/home-page/navbar/navbar.component';
import { HomeComponent } from './components/home-page/home/home.component';
import { FooterComponent } from './components/home-page/footer/footer.component';
import { NoticiasIndexComponent } from './components/noticias/noticias-index/noticias-index.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {NgFor, DatePipe} from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SeleccionCategoriaComponent } from './components/preguntas/seleccion-categoria/seleccion-categoria.component';
import { CategoriaComponent } from './components/preguntas/categoria/categoria.component';
import { AgregarFuncionarioComponent } from './components/mantenedor/agregar-funcionario/agregar-funcionario.component';
import { HttpClientModule } from '@angular/common/http';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { AgregarPreguntaComponent } from './components/mantenedor/agregar-pregunta/agregar-pregunta.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    NoticiasIndexComponent,
    SeleccionCategoriaComponent,
    CategoriaComponent,
    AgregarFuncionarioComponent,
    FuncionariosComponent,
    AgregarPreguntaComponent,
    BuscadorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    NgFor,
    MatIconModule,
    MatDividerModule,
    DatePipe,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
