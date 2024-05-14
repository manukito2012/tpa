import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto3TiketListadosComponent } from './punto3-tiket-listados.component';

describe('Punto3TiketListadosComponent', () => {
  let component: Punto3TiketListadosComponent;
  let fixture: ComponentFixture<Punto3TiketListadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Punto3TiketListadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Punto3TiketListadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
