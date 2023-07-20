import { Component,OnInit } from '@angular/core';
import {FuncionariosService} from "../../services/funcionarios.service";
interface Funcionario{
  id_Funcionario:number,
  nombre:string,
  apellido:string,
  correo:string,
  url_fotografia:string,
  ubicacion:string,
  tipo_usuario:string,
  tags:string,
  categoria:string
}
@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit{
//funcionarios:any;
//funcionariosFiltrados: any;
funcionarios: Funcionario[] = [];
funcionariosFiltrados: Funcionario[] = [];
  constructor(private funcionariosService: FuncionariosService) {  }

  ngOnInit() {
    this.funcionariosService.listarFuncionariosAdmin().subscribe((funcionarios:any) => {
      this.funcionarios = funcionarios.data;
      this.funcionariosFiltrados = funcionarios.data; // Asegúrate de que los datos filtrados también se inicialicen
      console.log(this.funcionarios);
    })
  }

  filtrarFuncionarios(terminoBusqueda: string) {
    if (terminoBusqueda) {
      let terminoBusquedaLower = terminoBusqueda.toLowerCase();
      this.funcionariosFiltrados = this.funcionarios.filter((funcionario : Funcionario) =>
        funcionario.nombre.toLowerCase().includes(terminoBusquedaLower) ||
        funcionario.apellido.toLowerCase().includes(terminoBusquedaLower)
        );
    } else {
      this.funcionariosFiltrados = [...this.funcionarios];
    }
  }


}
