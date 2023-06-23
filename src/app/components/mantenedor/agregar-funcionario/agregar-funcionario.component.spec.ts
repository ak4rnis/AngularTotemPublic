import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFuncionarioComponent } from './agregar-funcionario.component';

describe('AgregarFuncionarioComponent', () => {
  let component: AgregarFuncionarioComponent;
  let fixture: ComponentFixture<AgregarFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
