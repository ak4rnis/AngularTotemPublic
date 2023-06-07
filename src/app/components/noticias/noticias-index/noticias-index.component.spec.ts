import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasIndexComponent } from './noticias-index.component';

describe('NoticiasIndexComponent', () => {
  let component: NoticiasIndexComponent;
  let fixture: ComponentFixture<NoticiasIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
