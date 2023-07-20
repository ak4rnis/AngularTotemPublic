import { Component,AfterViewInit,OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import {PreguntasService} from "../../../services/preguntas.service";

@Component({
  selector: 'app-seleccion-categoria',
  templateUrl: './seleccion-categoria.component.html',
  styleUrls: ['./seleccion-categoria.component.css']
})
export class SeleccionCategoriaComponent implements OnInit{
  preguntas:any;
  preguntasFiltradas :any;
  currentFilter: string = '';
  constructor(private preguntaService: PreguntasService) {
  }
  showInfo(info: string) {
    alert(info);
  }
  setFilter(filter: string) {
    this.currentFilter = filter;
    this.filtrarPreguntas('');
  }
  get filteredPreguntas() {
    if (this.preguntas && this.preguntas.data) {
      if (this.currentFilter) {
        return this.preguntas.data.filter((pregunta:any) => pregunta.categoria === this.currentFilter);
      } else {
        return this.preguntas.data;  // si no hay filtro, devuelve todas las preguntas
      }
    } else {
      return [];
    }
  }
  ngOnInit() {
    this.preguntasFiltradas = [];
    this.preguntaService.listarPreguntasAdmin().subscribe(preguntas => {
      this.preguntas = preguntas ;
      console.log(this.preguntas)
    });
  }
  filtrarPreguntas(terminoBusqueda: string){
    if (terminoBusqueda) {
      let terminoBusquedaLower = terminoBusqueda.toLowerCase();
      this.preguntasFiltradas = this.filteredPreguntas.filter((filteredPreguntas:any) =>
      filteredPreguntas.pregunta.toLowerCase().includes(terminoBusquedaLower)
        //||preguntas.apellido.toLowerCase().includes(terminoBusquedaLower)
        );console.log(this.preguntasFiltradas);

    } else {
      this.preguntasFiltradas = [...this.filteredPreguntas];
    }
  }
}
