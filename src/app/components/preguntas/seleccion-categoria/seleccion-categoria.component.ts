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
  currentFilter: string = '';
  constructor(private preguntaService: PreguntasService) {
  }
  showInfo(info: string) {
    alert(info);
  }
  setFilter(filter: string) {
    this.currentFilter = filter;
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
    this.preguntaService.listarPreguntasAdmin().subscribe(preguntas => {
      this.preguntas = preguntas ;
      console.log(this.preguntas)
    });
  }
}
