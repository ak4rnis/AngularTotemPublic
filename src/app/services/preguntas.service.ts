import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  private baseURL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  registrarPreguntaAdmin(pregunta:any) {
    return this.http.post(`${this.baseURL}/registrar_pregunta_admin`, pregunta);
  }

  listarPreguntasAdmin() {
    return this.http.get(`${this.baseURL}/listar_preguntas_admin`);
  }

  mostrarPreguntaPkAdmin(pk:any) {
    return this.http.get(`${this.baseURL}/mostrar_pregunta_admin/${pk}`);
  }

  actualizarPreguntaAdmin(pk:any, pregunta:any) {
    return this.http.put(`${this.baseURL}/actualizar_pregunta_admin/${pk}`, pregunta);
  }

  eliminarPreguntaAdmin(pk:any) {
    return this.http.delete(`${this.baseURL}/eliminar_pregunta_admin/${pk}`);
  }
}
