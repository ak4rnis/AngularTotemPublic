import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {


  private baseURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  registrarFuncionarioAdmin(data: any) {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(`${this.baseURL}/registrar_funcionario_admin`, data, {headers: headers});
  }

  listarFuncionariosAdmin() {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.get(`${this.baseURL}/listar_funcionarios_admin`, {headers: headers});
  }

  mostrarFuncionarioPorPKAdmin(pk: any) {
    return this.http.get(`${this.baseURL}/mostrar_funcionario_por_pk_admin/${pk}`);
  }

  mostrarUrlFotografiaFuncionario(img: string) {
    return this.http.get(`${this.baseURL}/mostrar_url_fotografia_funcionario/${img}`, { responseType: 'blob' });
  }

  actualizarFuncionarioAdmin(pk: any, data: any) {
    return this.http.put(`${this.baseURL}/actualizar_funcionario_admin/${pk}`, data);
  }

  eliminarFuncionarioAdmin(pk: any) {
    return this.http.delete(`${this.baseURL}/eliminar_funcionario_admin/${pk}`);
  }}
