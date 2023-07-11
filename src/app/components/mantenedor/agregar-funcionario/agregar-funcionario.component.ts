import { Component,OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from "@angular/forms";
import Swal from 'sweetalert2' ;
import {FuncionariosService} from "../../../services/funcionarios.service";
@Component({
  selector: 'app-agregar-funcionario',
  templateUrl: './agregar-funcionario.component.html',
  styleUrls: ['./agregar-funcionario.component.css']
})
export class AgregarFuncionarioComponent {
  funcionario: FormGroup;
  funcionarios:any;
  selectedValue:any;
  constructor(private funcionarioService: FuncionariosService,private fb: FormBuilder,) {

    this.funcionario = this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      url_fotografia:['',Validators.required],
      correo:['',Validators.required],
      ubicacion:['',Validators.required],
      tipo_funcionario:['',Validators.required],
      tags:['',Validators.required],
      categoria:['',Validators.required],
    })
  }
  tomarDato(event: any){
    this.selectedValue = event.target.value;
    console.log(this.selectedValue);
  }
  agregarFuncionario(){
    const data = this.funcionario.value;

    this.funcionarioService.registrarFuncionarioAdmin(data).subscribe({
      next: (data) => {
        Swal.fire({
          icon: 'success',
          title: 'El funcionario se registro exitosamente',
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
