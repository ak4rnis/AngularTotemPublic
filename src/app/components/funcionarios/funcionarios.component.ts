import { Component,OnInit } from '@angular/core';
import {FuncionariosService} from "../../services/funcionarios.service";

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit{
funcionarios:any;
funcionariosFiltrados: any;
  constructor(private funcionariosService: FuncionariosService) {
  }
  ngOnInit() {
    this.funcionariosService.listarFuncionariosAdmin().subscribe(funcionarios => {
      this.funcionarios = funcionarios;
      this.funcionariosFiltrados = funcionarios; // Asegúrate de que los datos filtrados también se inicialicen
      console.log(this.funcionarios);
    })
  }

  filtrarFuncionarios(terminoBusqueda: string) {
    if (terminoBusqueda) {
      this.funcionariosFiltrados = this.funcionarios.filter(funcionario =>
        funcionario.nombre.includes(terminoBusqueda) ||
        funcionario.apellido.includes(terminoBusqueda));
    } else {
      this.funcionariosFiltrados = [...this.funcionarios];
    }
  }


}
