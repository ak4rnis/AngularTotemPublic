import { Component,AfterViewInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
@Component({
  selector: 'app-seleccion-categoria',
  templateUrl: './seleccion-categoria.component.html',
  styleUrls: ['./seleccion-categoria.component.css']
})
export class SeleccionCategoriaComponent {


  categories = [
    { id: 1, name: 'Categoría 1' },
    { id: 2, name: 'Categoría 2' },
    { id: 3, name: 'Categoría 3' },
    { id: 4, name: 'Categoría 4' },
    // Agrega más categorías según sea necesario
  ];


  selectedCategory: { id: number, name: string } |null   = null;
  categoryData = null;

  selectCategory(category :{id:number,name:string}) {
    this.selectedCategory = category;
  }
}
