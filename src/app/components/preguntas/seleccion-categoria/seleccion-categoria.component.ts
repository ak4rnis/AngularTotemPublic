import { Component,AfterViewInit,OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import {PreguntasService} from "../../../services/preguntas.service";

@Component({
  selector: 'app-seleccion-categoria',
  templateUrl: './seleccion-categoria.component.html',
  styleUrls: ['./seleccion-categoria.component.css']
})
export class SeleccionCategoriaComponent implements OnInit{
  preguntas:any
  constructor(private preguntaService: PreguntasService) {
  }
  showInfo(info: string) {
    alert(info);
  }

  ngOnInit() {
    this.preguntaService.listarPreguntasAdmin().subscribe(preguntas => {
      this.preguntas = preguntas ;
      console.log(this.preguntas)
    });
  }
}
