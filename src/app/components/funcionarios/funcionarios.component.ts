import { Component,OnInit } from '@angular/core';
import {FuncionariosService} from "../../services/funcionarios.service";

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit{
funcionarios:any;
  constructor(private funcionariosService: FuncionariosService) {
  }
  ngOnInit() {
    this.funcionariosService.listarFuncionariosAdmin().subscribe(funcionarios =>{
      this.funcionarios = funcionarios;
      console.log(this.funcionarios);
    })
  }

}
