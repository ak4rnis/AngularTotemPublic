import { Component ,EventEmitter,Output} from '@angular/core';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  @Output() busqueda = new EventEmitter<string>();

  actualizarBusqueda(event: any) {
    this.busqueda.emit(event.target.value);
  }
}
