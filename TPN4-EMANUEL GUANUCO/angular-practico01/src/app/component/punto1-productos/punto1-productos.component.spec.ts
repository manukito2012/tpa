import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto1ProductosComponent } from './punto1-productos.component';

describe('Punto1ProductosComponent', () => {
  let component: Punto1ProductosComponent;
  let fixture: ComponentFixture<Punto1ProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Punto1ProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Punto1ProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
