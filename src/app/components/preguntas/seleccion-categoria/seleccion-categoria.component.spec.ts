import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionCategoriaComponent } from './seleccion-categoria.component';

describe('SeleccionCategoriaComponent', () => {
  let component: SeleccionCategoriaComponent;
  let fixture: ComponentFixture<SeleccionCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
