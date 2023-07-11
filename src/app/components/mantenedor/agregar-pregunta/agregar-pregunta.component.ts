import { Component,OnInit } from '@angular/core';
import {PreguntasService} from "../../../services/preguntas.service";
import {FormBuilder,Validators,FormGroup} from "@angular/forms";
import Swal from 'sweetalert2' ;
@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css']
})
export class AgregarPreguntaComponent implements OnInit{
  pregunta: FormGroup;
  preguntas:any;
  selectedValue:any;
  constructor(private preguntaService: PreguntasService,private fb: FormBuilder,) {

    this.pregunta = this.fb.group({
      pregunta:['',Validators.required],
      respuesta:['',Validators.required],
      categoria:['',Validators.required]
    });
  }
  ngOnInit(){
    this.preguntaService.listarPreguntasAdmin().subscribe(preguntas => {
      this.preguntas = preguntas ;
      console.log(this.preguntas)
    });
  }

  tomarDato(event: any){
    this.selectedValue = event.target.value;
    console.log(this.selectedValue);
  }
  onAgregarPregunta() {
    const data = this.pregunta.value;
    data.categoria =this.selectedValue;
    this.preguntaService.registrarPreguntaAdmin(data).subscribe({
      next: (data) => {
      Swal.fire({
        icon: 'success',
        title: 'El pregunta se registro exitosamente',
        showConfirmButton: false,
        timer: 1500,

      });
    },
      error: (err) => {
      // manejar error aquí
      console.error('Hubo un error al crear el producto: ', err);
    }
  });
  }
}
